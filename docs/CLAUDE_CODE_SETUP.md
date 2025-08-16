# Claude Code Setup for FabrikTakt

This document describes the optimized Claude Code configuration for the FabrikTakt React/TypeScript project, based on best practices and performance optimization research.

## Quick Start

### Recommended Launch Method
```bash
# Use the optimized launcher script
./scripts/claude-launcher.sh

# Common usage patterns
./scripts/claude-launcher.sh -y     # Auto-approve permissions
./scripts/claude-launcher.sh -r     # Resume previous session
./scripts/claude-launcher.sh -ry    # Resume with auto-approve
```

### Manual Launch (Alternative)
```bash
# Set environment variables and launch
CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1 \
CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL=1 \
CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 \
ENABLE_BACKGROUND_TASKS=1 \
FORCE_AUTO_BACKGROUND_TASKS=1 \
MAX_THINKING_TOKENS=50000 \
DISABLE_TELEMETRY=1 \
claude
```

## Configuration Overview

### Core Settings (`.claude/settings.json`)

```json
{
  "model": "claude-sonnet-4-20250514",
  "includeCoAuthoredBy": false,
  "env": {
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1",
    "CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL": "1", 
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ENABLE_BACKGROUND_TASKS": "1",
    "FORCE_AUTO_BACKGROUND_TASKS": "1",
    "MAX_THINKING_TOKENS": "50000",
    "DISABLE_TELEMETRY": "1"
  }
}
```

### Key Environment Variables Explained

| Variable | Purpose | Impact |
|----------|---------|---------|
| `CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1` | Keeps working directory consistent | Better file path resolution |
| `CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL=1` | Unified file reading including Jupyter | Better context handling |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` | Disables telemetry and auto-updates | Privacy + Performance |
| `ENABLE_BACKGROUND_TASKS=1` | Enables background task functionality | Long-running commands |
| `FORCE_AUTO_BACKGROUND_TASKS=1` | Auto-backgrounds long tasks | No manual confirmation |
| `MAX_THINKING_TOKENS=50000` | Extended thinking capability | Better reasoning |
| `DISABLE_TELEMETRY=1` | Disable usage tracking | Privacy protection |

## Specialized Subagents

### Available Subagents

1. **react-developer** - Expert React/TypeScript development
2. **code-reviewer** - Comprehensive code quality reviews
3. **debugger** - Systematic debugging and issue resolution
4. **performance-optimizer** - Bundle size and runtime optimization

### Subagent Usage

```bash
# Automatic delegation (recommended)
> Add a new contact form component with validation

# Explicit invocation
> Use the react-developer subagent to create a new hero section
> Have the code-reviewer subagent review my recent changes
> Ask the debugger subagent to investigate this TypeScript error
> Use the performance-optimizer to analyze bundle size
```

## Hooks System

### Active Hooks

#### Pre-Tool Use Hooks
- **Command Logging**: Logs all bash commands with timestamps
- **File Protection**: Prevents editing sensitive files (`.env`, lock files)

#### Post-Tool Use Hooks
- **Auto-Formatting**: Runs appropriate formatters after file edits
  - Prettier for TypeScript/JavaScript/CSS
  - JSON formatting for JSON files
  - Markdown optimization with language detection

#### Session Hooks
- **Session Logging**: Tracks user prompts and Claude responses
- **Notification Logging**: Records Claude Code notifications

### Hook Logs Location
```bash
~/.claude/fabriktakt-commands.log     # Bash command history
~/.claude/fabriktakt-session.log      # Session activity
~/.claude/fabriktakt-notifications.log # Notifications
```

## Permissions System

### Allowed Commands
- **Package Managers**: `bun`, `npm`, `pnpm`, `yarn`
- **Development Tools**: `git`, `tsc`, `vite`, `eslint`, `prettier`
- **Testing Tools**: `vitest`, `playwright`, `cypress`
- **Build Tools**: `docker`, `node`, `npx`, `bunx`
- **System Tools**: File operations, networking, process management

### File Access Patterns
- **Source Code**: `src/**`, `public/**`, `docs/**`
- **Config Files**: `*.json`, `*.js`, `*.ts`, `*.md`, `*.yml`
- **Build Configs**: `vite.config.*`, `tailwind.config.*`, `tsconfig.*`

## Performance Optimizations

### Context Management
- **File Exclusions**: Large files and directories excluded via `.claudeignore`
- **Selective Reading**: Focus on relevant file types and directories
- **Background Tasks**: Long-running commands don't block interaction

### Bundle Optimization
- **Dependency Tracking**: Monitor package.json changes
- **Build Analysis**: Automated bundle size checking
- **Code Splitting**: Recommendations for lazy loading

## Development Workflow Integration

### Common Commands
```bash
# Development
bun run dev          # Start development server
bun run build        # Production build
bun run preview      # Preview production build

# Code Quality
bun run lint         # ESLint checking
bun run typecheck    # TypeScript compilation check
bunx prettier --write src/  # Format code

# Testing
bun run test         # Run tests
bun run test:watch   # Watch mode testing
```

### Recommended Workflow
1. **Start Session**: `./scripts/claude-launcher.sh`
2. **Development**: Use subagents for specific tasks
3. **Code Review**: Automatic review after changes
4. **Testing**: Run tests before committing
5. **Performance Check**: Monitor bundle size and performance

## FabrikTakt-Specific Features

### Technology Stack Support
- **React 18**: Modern hooks and concurrent features
- **TypeScript 5.5+**: Strict typing with gradual adoption
- **Vite**: Fast build tool with optimized configuration
- **TailwindCSS**: Utility-first styling with custom design system
- **Motion**: Advanced animations with performance focus
- **Radix UI**: Accessible component primitives

### Bilingual Development
- **Language Context**: Full English/Persian translation support
- **RTL Support**: Right-to-left layout for Persian
- **Form Validation**: Bilingual error messages
- **Accessibility**: Multi-language screen reader support

### Form Architecture
- **React Hook Form**: Optimized form state management
- **Real-time Validation**: Custom validation hooks
- **Email Integration**: EmailJS with security measures
- **Rate Limiting**: Built-in spam protection

## Troubleshooting

### Common Issues

#### Claude Code Not Starting
```bash
# Check Claude Code installation
claude --version

# Verify permissions
ls -la .claude/

# Check settings validity
jq . .claude/settings.json
```

#### Hook Execution Failures
```bash
# Check hook permissions
ls -la .claude/hooks/

# Make hooks executable
chmod +x .claude/hooks/*.py

# Test hook manually
python3 .claude/hooks/format_on_save.py < test_input.json
```

#### Performance Issues
```bash
# Clear Claude Code cache
rm -rf ~/.claude/cache/

# Check bundle size
bun run build
du -sh dist/

# Analyze dependencies
bunx depcheck
```

### Debug Mode
```bash
# Launch with debug output
CLAUDE_DEBUG=1 ./scripts/claude-launcher.sh -d
```

## Security Considerations

### File Protection
- **Sensitive Files**: Automatic protection for `.env`, lock files
- **Git Directory**: Read-only access to `.git/`
- **Node Modules**: Excluded from context

### Network Security
- **Telemetry Disabled**: No usage data sent to external services
- **Local Processing**: All operations run locally
- **API Key Safety**: Environment variables properly isolated

## Advanced Configuration

### Custom Subagents
```bash
# Create new subagent
/agents

# Edit existing subagent
vi .claude/agents/custom-agent.md
```

### Hook Customization
```bash
# Add new hook
vi .claude/settings.json

# Test hook
echo '{"tool_input":{"file_path":"test.ts"}}' | python3 .claude/hooks/format_on_save.py
```

### Environment Customization
```bash
# Add to shell profile (.zshrc, .bashrc)
alias cc='./scripts/claude-launcher.sh'
alias ccy='./scripts/claude-launcher.sh -y'
alias ccr='./scripts/claude-launcher.sh -r'
```

## Performance Monitoring

### Metrics to Track
- Bundle size after changes
- TypeScript compilation time
- Test execution time
- Development server startup time

### Optimization Targets
- **Bundle Size**: < 500KB total
- **Compilation**: < 5 seconds
- **Test Suite**: < 30 seconds
- **Dev Server**: < 3 seconds startup

## Best Practices

### Session Management
1. Use specific, task-focused requests
2. Leverage subagents for specialized work
3. Review changes before committing
4. Monitor performance impact of changes

### Code Quality
1. Always run TypeScript checks
2. Use the code-reviewer subagent proactively
3. Test in both English and Persian languages
4. Verify responsive design on mobile

### Performance
1. Check bundle size after dependency changes
2. Monitor animation performance
3. Test form submission flows end-to-end
4. Validate accessibility compliance

## Resources

### Documentation
- [Claude Code Official Docs](https://docs.anthropic.com/en/docs/claude-code)
- [Frontend Codebase Analysis](./FRONTEND_ANALYSIS.md)
- [FabrikTakt README](../README.md)

### Tools and Dependencies
- [Bun Package Manager](https://bun.sh/)
- [Vite Build Tool](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Motion Animations](https://motion.dev/)

---

**Created**: August 16, 2025  
**Last Updated**: August 16, 2025  
**Version**: 1.0.0
