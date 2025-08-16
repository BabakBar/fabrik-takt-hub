#!/bin/bash
# FabrikTakt Claude Code Launcher Script
# Optimized for React/TypeScript development with enhanced performance

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[FabrikTakt]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Environment variables for optimized Claude Code
export CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR="1"
export CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL="1"
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1"
export ENABLE_BACKGROUND_TASKS="1"
export FORCE_AUTO_BACKGROUND_TASKS="1"
export DISABLE_PROMPT_CACHING="0"
export MAX_THINKING_TOKENS="50000"
export DISABLE_TELEMETRY="1"
export DISABLE_ERROR_REPORTING="1"

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not in a git repository"
        exit 1
    fi
    
    # Check if we're in the FabrikTakt project
    if [[ ! -f "package.json" ]] || ! grep -q "vite_react_shadcn_ts" package.json; then
        print_warning "This doesn't appear to be the FabrikTakt project"
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    # Check for Claude Code
    if ! command -v claude &> /dev/null; then
        print_error "Claude Code not found. Please install Claude Code first."
        echo "Visit: https://claude.ai/download"
        exit 1
    fi
    
    # Check for required tools
    local missing_tools=()
    
    if ! command -v bun &> /dev/null; then
        missing_tools+=("bun")
    fi
    
    if ! command -v jq &> /dev/null; then
        missing_tools+=("jq")
    fi
    
    if [[ ${#missing_tools[@]} -gt 0 ]]; then
        print_warning "Missing recommended tools: ${missing_tools[*]}"
        print_status "Install with: brew install ${missing_tools[*]}"
    fi
    
    print_success "Prerequisites check completed"
}

# Function to setup Claude Code configuration
setup_claude_config() {
    print_status "Setting up Claude Code configuration..."
    
    # Create .claude directory if it doesn't exist
    mkdir -p .claude/agents .claude/hooks
    
    # Check if settings.json exists and is valid
    if [[ -f ".claude/settings.json" ]]; then
        if jq empty .claude/settings.json 2>/dev/null; then
            print_success "Claude Code settings found and valid"
        else
            print_warning "Invalid settings.json found, creating backup..."
            cp .claude/settings.json .claude/settings.json.backup
        fi
    fi
    
    # Make hooks executable
    if [[ -f ".claude/hooks/format_on_save.py" ]]; then
        chmod +x .claude/hooks/format_on_save.py
        print_success "Format hook made executable"
    fi
    
    print_success "Claude Code configuration setup completed"
}

# Function to validate environment
validate_environment() {
    print_status "Validating environment..."
    
    # Check Node.js version
    if command -v node &> /dev/null; then
        local node_version=$(node --version | cut -d'v' -f2)
        print_success "Node.js version: $node_version"
    fi
    
    # Check Bun version
    if command -v bun &> /dev/null; then
        local bun_version=$(bun --version)
        print_success "Bun version: $bun_version"
    fi
    
    # Check TypeScript compilation
    if [[ -f "tsconfig.json" ]]; then
        if bunx tsc --noEmit --skipLibCheck 2>/dev/null; then
            print_success "TypeScript compilation check passed"
        else
            print_warning "TypeScript compilation issues detected"
        fi
    fi
    
    print_success "Environment validation completed"
}

# Function to launch Claude Code with appropriate flags
launch_claude() {
    local claude_args=()
    local mode="default"
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -y|--yes)
                claude_args+=("--dangerously-skip-permissions")
                mode="auto-approve"
                shift
                ;;
            -r|--resume)
                claude_args+=("--resume")
                mode="resume"
                shift
                ;;
            -ry|-yr|--resume-yes|--yes-resume)
                claude_args+=("--resume" "--dangerously-skip-permissions")
                mode="resume-auto"
                shift
                ;;
            -d|--debug)
                export CLAUDE_DEBUG="1"
                mode="debug"
                shift
                ;;
            -h|--help)
                show_help
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    print_status "Launching Claude Code in $mode mode..."
    
    # Create log directory
    mkdir -p ~/.claude
    
    # Launch Claude Code with environment variables and arguments
    print_success "Starting Claude Code with optimized settings..."
    echo -e "${CYAN}Environment variables:${NC}"
    echo "  - Background tasks: enabled"
    echo "  - Unified read tool: enabled"
    echo "  - Nonessential traffic: disabled"
    echo "  - Telemetry: disabled"
    echo "  - Max thinking tokens: 50000"
    
    if [[ ${#claude_args[@]} -gt 0 ]]; then
        echo -e "${CYAN}Claude Code flags:${NC} ${claude_args[*]}"
    fi
    
    # Launch Claude Code
    claude "${claude_args[@]}"
}

# Function to show help
show_help() {
    echo -e "${PURPLE}FabrikTakt Claude Code Launcher${NC}"
    echo
    echo "Usage: $0 [options]"
    echo
    echo "Options:"
    echo "  -y, --yes          Skip permission prompts (auto-approve)"
    echo "  -r, --resume       Resume previous session"
    echo "  -ry, --resume-yes  Resume session with auto-approve"
    echo "  -d, --debug        Enable debug mode"
    echo "  -h, --help         Show this help message"
    echo
    echo "Examples:"
    echo "  $0                 # Launch with default settings"
    echo "  $0 -y              # Launch with auto-approve"
    echo "  $0 -r              # Resume previous session"
    echo "  $0 -ry             # Resume with auto-approve"
    echo
    echo "Environment features:"
    echo "  • Background task automation"
    echo "  • Unified file reading"
    echo "  • Optimized for React/TypeScript"
    echo "  • FabrikTakt-specific subagents"
    echo "  • Auto-formatting hooks"
    echo "  • Performance monitoring"
}

# Function to show project info
show_project_info() {
    print_status "FabrikTakt Project Information"
    echo
    
    if [[ -f "package.json" ]]; then
        local project_name=$(jq -r '.name // "Unknown"' package.json)
        local project_version=$(jq -r '.version // "Unknown"' package.json)
        echo -e "${CYAN}Project:${NC} $project_name"
        echo -e "${CYAN}Version:${NC} $project_version"
    fi
    
    # Show git branch
    if git rev-parse --git-dir > /dev/null 2>&1; then
        local current_branch=$(git branch --show-current)
        echo -e "${CYAN}Git Branch:${NC} $current_branch"
    fi
    
    # Show available scripts
    if [[ -f "package.json" ]] && jq -e '.scripts' package.json > /dev/null; then
        echo -e "${CYAN}Available Scripts:${NC}"
        jq -r '.scripts | keys[]' package.json | sed 's/^/  • /'
    fi
    
    # Show subagents
    if [[ -d ".claude/agents" ]]; then
        local agent_count=$(find .claude/agents -name "*.md" | wc -l)
        echo -e "${CYAN}Claude Subagents:${NC} $agent_count configured"
        find .claude/agents -name "*.md" -exec basename {} .md \; | sed 's/^/  • /'
    fi
    
    echo
}

# Main execution
main() {
    echo -e "${PURPLE}╔═══════════════════════════════════════╗${NC}"
    echo -e "${PURPLE}║      FabrikTakt Claude Code Setup     ║${NC}"
    echo -e "${PURPLE}╚═══════════════════════════════════════╝${NC}"
    echo
    
    # Show project information
    show_project_info
    
    # Run checks
    check_prerequisites
    setup_claude_config
    validate_environment
    
    echo
    print_success "Setup completed successfully!"
    echo
    
    # Launch Claude Code
    launch_claude "$@"
}

# Run main function with all arguments
main "$@"