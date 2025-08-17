# Claude Code Troubleshooting Guide

## Common Issues and Solutions

### 1. "Invalid model name" Error

**Problem**: `API Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"Invalid model name"}}`

**Solution**: 
```bash
# Use model aliases instead of full model names
claude --model sonnet    # ✅ Correct
claude --model opus      # ✅ Correct  
claude --model haiku     # ✅ Correct

# Avoid full model names in settings.json
# ❌ Incorrect: "model": "claude-sonnet-4-20250514"
# ✅ Correct: Remove model from settings, use --model flag
```

### 2. Local vs Global Installation Conflict

**Problem**: `Local installation found but not in use`

**Solutions**:

#### Option A: Use Local Installation (Recommended)
```bash
# Check your shell configuration
grep -n "claude" ~/.zshrc

# The alias should point to local installation
alias claude='/Users/Sia/.claude/local/claude'

# Source your shell config
source ~/.zshrc
```

#### Option B: Use Global Installation
```bash
# Remove the alias temporarily
unalias claude

# Use global installation
/usr/local/bin/claude --model sonnet
```

### 3. Settings.json Validation Errors

**Problem**: Settings file contains unsupported properties

**Solution**:
```json
{
  "includeCoAuthoredBy": false,
  "env": {
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1",
    "CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL": "1",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ENABLE_BACKGROUND_TASKS": "1",
    "FORCE_AUTO_BACKGROUND_TASKS": "1",
    "MAX_THINKING_TOKENS": "50000",
    "DISABLE_TELEMETRY": "1",
    "DISABLE_ERROR_REPORTING": "1"
  },
  "permissions": { /* ... */ },
  "hooks": { /* ... */ }
}
```

### 4. Hook Execution Failures

**Problem**: Hooks not running or failing

**Diagnosis**:
```bash
# Check hook permissions
ls -la .claude/hooks/

# Make hooks executable
chmod +x .claude/hooks/*.py

# Test hook manually
echo '{"tool_input":{"file_path":"test.ts"}}' | python3 .claude/hooks/format_on_save.py
```

### 5. Environment Variables Not Working

**Problem**: Environment variables not being applied

**Solutions**:
```bash
# Check if variables are set
env | grep CLAUDE

# Manual export (temporary)
export CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1
export CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL=1

# Use launcher script (preferred)
./scripts/claude-launcher.sh
```

### 6. Subagents Not Loading

**Problem**: Subagents not available or not working

**Diagnosis**:
```bash
# Check subagent files exist
ls -la .claude/agents/

# Validate subagent markdown format
head -10 .claude/agents/react-developer.md

# Check for YAML frontmatter errors
```

### 7. Permission Denied Errors

**Problem**: Claude Code can't access files or run commands

**Solutions**:
```bash
# Check file permissions
ls -la .claude/

# Fix permissions
chmod -R 755 .claude/
chmod +x .claude/hooks/*.py
chmod +x scripts/claude-launcher.sh

# Check if in correct directory
pwd  # Should be in FabrikTakt project root
```

## Quick Diagnostic Commands

### Check Installation
```bash
# Which Claude Code is being used
which claude

# Version check
claude --version

# Available models
claude --help | grep -A 5 model
```

### Test Basic Functionality
```bash
# Test with simple command
echo "Hello" | claude --model sonnet --print

# Test settings loading
claude --model sonnet /memory
```

### Environment Check
```bash
# Check project structure
ls -la .claude/

# Validate settings
jq . .claude/settings.json

# Check git status
git status
```

## Model Selection Guide

### Available Models (use as aliases)
- **sonnet**: Latest Claude 3.5 Sonnet (recommended for development)
- **opus**: Claude 3 Opus (most capable, slower)
- **haiku**: Claude 3 Haiku (fastest, lighter tasks)

### Usage Examples
```bash
# Development work (recommended)
claude --model sonnet

# Heavy analysis tasks
claude --model opus

# Quick tasks and testing
claude --model haiku
```

## Recommended Launch Methods

### 1. Optimized Launcher (Best)
```bash
./scripts/claude-launcher.sh
./scripts/claude-launcher.sh -y    # Auto-approve
./scripts/claude-launcher.sh -r    # Resume session
```

### 2. Manual Launch
```bash
# With environment variables
CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR=1 \
CLAUDE_CODE_ENABLE_UNIFIED_READ_TOOL=1 \
CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 \
ENABLE_BACKGROUND_TASKS=1 \
FORCE_AUTO_BACKGROUND_TASKS=1 \
claude --model sonnet
```

### 3. Simple Launch
```bash
# Basic launch
claude --model sonnet
```

## Performance Issues

### Slow Startup
1. Check for large files in project
2. Review .claudeignore exclusions
3. Reduce hooks complexity
4. Use simpler model (haiku) for testing

### Memory Issues
1. Clear Claude Code cache: `rm -rf ~/.claude/cache/`
2. Restart terminal session
3. Check available disk space
4. Review context size in memory

### Network Issues
1. Check internet connection
2. Verify API key configuration
3. Try different model
4. Disable non-essential traffic: `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`

## Getting Help

### Logs and Debugging
```bash
# Check Claude Code logs
tail -f ~/.claude/fabriktakt-commands.log
tail -f ~/.claude/fabriktakt-session.log

# Enable debug mode
CLAUDE_DEBUG=1 ./scripts/claude-launcher.sh -d

# Check system logs
tail -f /var/log/system.log | grep claude
```

### Reset Configuration
```bash
# Backup current config
cp -r .claude .claude.backup

# Reset to minimal config
cat > .claude/settings.json << 'EOF'
{
  "includeCoAuthoredBy": false,
  "env": {
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1"
  }
}
EOF

# Test basic functionality
claude --model sonnet
```

### Community Resources
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [GitHub Issues](https://github.com/anthropics/claude-code/issues)
- Check for updates: `claude --version`

---

**Quick Fix Checklist**:
1. ✅ Use `claude --model sonnet` instead of specifying model in settings
2. ✅ Ensure using local installation with alias
3. ✅ Make hooks executable: `chmod +x .claude/hooks/*.py`
4. ✅ Use launcher script: `./scripts/claude-launcher.sh`
5. ✅ Check project directory and git status
