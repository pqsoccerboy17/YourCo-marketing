# Morning Standup

Quick project status check to start your day.

## What This Shows

### 1. Recent Activity
```bash
git log --oneline -10
```
- Last 10 commits
- What changed recently

### 2. Current Branch Status
```bash
git status
git branch -a
```
- What branch you're on
- Any uncommitted changes
- Remote branches

### 3. Open PRs
- Check for any open pull requests
- Note any that need review or are ready to merge

### 4. Today's Priorities
Based on:
- Any failing tests
- Open issues assigned to you
- Incomplete features in progress

## Output Format
```
MORNING STANDUP - [Date]

YESTERDAY:
- [List of recent commits/changes]

TODAY'S STATUS:
- Branch: [current branch]
- Uncommitted changes: [yes/no]
- Tests: [passing/failing]

PRIORITIES:
1. [Most important task]
2. [Second task]
3. [Third task]

BLOCKERS:
- [Any issues preventing progress]
```

## Usage
```
/morning-standup
```
