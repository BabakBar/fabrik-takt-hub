#!/usr/bin/env python3
"""
Auto-formatter for FabrikTakt codebase.
Runs appropriate formatters based on file type after save.
"""
import json
import sys
import subprocess
import os
import re

def run_command(cmd, cwd=None):
    """Run a command and return success status."""
    try:
        result = subprocess.run(
            cmd, 
            shell=True, 
            cwd=cwd,
            capture_output=True, 
            text=True
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def format_typescript_react(file_path):
    """Format TypeScript/React files."""
    project_root = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Run Prettier if available
    success, stdout, stderr = run_command(f"bunx prettier --write '{file_path}'", project_root)
    if success:
        print(f"✓ Formatted {os.path.basename(file_path)} with Prettier")
    else:
        print(f"⚠ Prettier not available or failed for {file_path}")
    
    # Run ESLint fix if available
    success, stdout, stderr = run_command(f"bunx eslint --fix '{file_path}'", project_root)
    if success:
        print(f"✓ ESLint auto-fix applied to {os.path.basename(file_path)}")

def format_json(file_path):
    """Format JSON files."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write('\n')
        
        print(f"✓ Formatted JSON file {os.path.basename(file_path)}")
    except Exception as e:
        print(f"⚠ Failed to format JSON file {file_path}: {e}")

def format_markdown(file_path):
    """Format Markdown files with consistent styling."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix code fence language detection
        def add_language_to_fence(match):
            indent, info, body, closing = match.groups()
            if not info.strip():
                # Simple language detection
                code = body.strip()
                if re.search(r'^\s*[{\[]', code):
                    try:
                        json.loads(code)
                        lang = 'json'
                    except:
                        lang = 'javascript'
                elif re.search(r'\b(function|const|let|var|import|export)\b', code):
                    lang = 'javascript'
                elif re.search(r'\b(def|import|from|class)\b', code):
                    lang = 'python'
                elif re.search(r'\b(bun|npm|git|ls|cd)\b', code):
                    lang = 'bash'
                else:
                    lang = 'text'
                
                return f"{indent}```{lang}\n{body}{closing}\n"
            return match.group(0)
        
        # Apply formatting
        fence_pattern = r'(?ms)^([ \t]{0,3})```([^\n]*)\n(.*?)(\n\1```)\s*$'
        content = re.sub(fence_pattern, add_language_to_fence, content)
        
        # Fix excessive blank lines
        content = re.sub(r'\n{3,}', '\n\n', content)
        
        # Ensure file ends with single newline
        content = content.rstrip() + '\n'
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Formatted Markdown file {os.path.basename(file_path)}")
    except Exception as e:
        print(f"⚠ Failed to format Markdown file {file_path}: {e}")

def format_css(file_path):
    """Format CSS files."""
    project_root = os.environ.get('CLAUDE_PROJECT_DIR', os.getcwd())
    
    # Run Prettier for CSS
    success, stdout, stderr = run_command(f"bunx prettier --write '{file_path}'", project_root)
    if success:
        print(f"✓ Formatted CSS file {os.path.basename(file_path)} with Prettier")
    else:
        print(f"⚠ Prettier not available for CSS file {file_path}")

def main():
    try:
        # Read input data from stdin
        input_data = json.load(sys.stdin)
        file_path = input_data.get('tool_input', {}).get('file_path', '')
        
        if not file_path or not os.path.exists(file_path):
            sys.exit(0)
        
        # Get file extension
        _, ext = os.path.splitext(file_path.lower())
        
        # Skip formatting for certain files
        skip_files = [
            'bun.lockb', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
            '.env', '.env.local', '.env.production', '.env.development'
        ]
        
        if os.path.basename(file_path) in skip_files:
            sys.exit(0)
        
        # Apply appropriate formatter based on file type
        if ext in ['.ts', '.tsx', '.js', '.jsx']:
            format_typescript_react(file_path)
        elif ext in ['.json']:
            format_json(file_path)
        elif ext in ['.md', '.mdx']:
            format_markdown(file_path)
        elif ext in ['.css', '.scss', '.sass']:
            format_css(file_path)
        
    except Exception as e:
        print(f"Error in format_on_save hook: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()