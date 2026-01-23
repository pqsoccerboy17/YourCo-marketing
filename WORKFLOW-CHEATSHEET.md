# Non-Developer Workflow Cheat Sheet

## Quick Reference: When to Use What

| Task | Use This | Why |
|------|----------|-----|
| Quick question about code | Cowork (Claude Desktop) | Fast, conversational |
| Edit a single file | Cursor AI (Cmd+K) | Visual, inline editing |
| Multi-file changes | Claude Code CLI | Better context handling |
| Overnight automation | Ralph Wiggum plugin | Autonomous iteration |
| Review/understand code | Any of the above | All work well |

---

## The Development Cycle

```
┌─────────────┐
│  1. PLAN    │  "What are we building?"
└──────┬──────┘
       ▼
┌─────────────┐
│  2. BUILD   │  Claude writes the code
└──────┬──────┘
       ▼
┌─────────────┐
│  3. TEST    │  npm run test
└──────┬──────┘
       ▼
┌─────────────┐
│  4. REVIEW  │  Look at changes, ask questions
└──────┬──────┘
       ▼
┌─────────────┐
│  5. COMMIT  │  /safe-commit
└──────┬──────┘
       ▼
┌─────────────┐
│  6. PR      │  /test-and-pr
└──────┬──────┘
       ▼
    REPEAT
```

---

## Essential Commands

### Starting Work
```bash
# Open project in Cursor
cursor /path/to/your/project

# Start Claude Code in terminal
claude

# Check project status
/morning-standup
```

### During Development
```bash
# Run tests
npm run test

# Check what changed
git status
git diff

# Ask Claude to explain something
/explain [file or concept]
```

### Saving Your Work
```bash
# Safe commit (reviews before committing)
/safe-commit "description of changes"

# Create pull request
/test-and-pr "feature name"
```

---

## Prompting Claude Effectively

### Good Prompts
- "Build a login form with email and password fields"
- "Fix the bug where users can't logout"
- "Add tests for the authentication module"
- "Explain what this function does in simple terms"

### Better Prompts (more context)
- "Build a login form with email and password. Use the existing Button component from /components/ui. Follow the same styling as the signup form."
- "The logout button in Header.tsx doesn't work on mobile Safari. Debug and fix it."

### Best Prompts (clear success criteria)
- "Build a login form. It should: 1) validate email format, 2) require password min 8 chars, 3) show error messages below each field, 4) disable submit while loading. Output COMPLETE when all 4 work."

---

## Ralph Wiggum Quick Start

### Safe Tasks (good for overnight runs)
- Writing tests for existing code
- Generating documentation
- Refactoring with clear rules
- Migrating file formats

### Risky Tasks (need human oversight)
- Authentication/security code
- Payment processing
- Database migrations
- Architectural decisions

### Template Command
```bash
/ralph-loop "YOUR TASK HERE. Output: COMPLETE when done" \
  --completion-promise "COMPLETE" \
  --max-iterations 15
```

### Cost Control
- Start with `--max-iterations 10`
- Monitor in dashboard
- 50 iterations on large codebase = $50-100+

---

## Troubleshooting

### "Command not found"
```bash
# Check if you're in the right directory
pwd
ls

# Navigate to project
cd /path/to/your/project
```

### "Tests failing"
```bash
# See detailed error
npm run test -- --verbose

# Ask Claude to fix
/fix-issue "test failures"
```

### "Git conflict"
```bash
# See what's conflicting
git status

# Ask Claude for help
"Help me resolve these git merge conflicts"
```

### "Something broke"
```bash
# See recent changes
git log --oneline -5

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Nuclear option: discard all changes
git checkout -- .
```

---

## Daily Workflow Example

### Morning
1. Open Cursor
2. Run `/morning-standup`
3. Review any open PRs
4. Pick first task

### During Day
1. Describe task to Claude
2. Review the plan
3. Let Claude implement
4. Test: `npm run test`
5. Review changes: `git diff`
6. Commit: `/safe-commit`

### End of Day
1. Push any branches
2. Create PRs for completed work
3. Note any blockers for tomorrow

---

## Key Files in Your Project

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Instructions for Claude (project root) |
| `.claude/commands/` | Custom slash commands |
| `.claude/CLAUDE.local.md` | Your personal preferences (gitignored) |
| `PROMPT.md` | For Ralph Wiggum loops |

---

## Getting Help

- **Confused about code?** → `/explain [filename]`
- **Something broke?** → `/fix-issue [description]`
- **Need to understand a concept?** → Just ask Claude in plain English
- **Want to try something?** → Ask "What would happen if..." - Claude can explain before doing
