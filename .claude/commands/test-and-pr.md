# Test and Create PR

Run tests, fix any failures, then create a pull request.

## Steps

### 1. Run Test Suite
```bash
npm run test
```
- Report results clearly
- If all pass, proceed to PR
- If failures, go to step 2

### 2. Fix Failures (if needed)
- Explain what's failing and why
- Fix each failing test
- Re-run until all pass
- Document what was fixed

### 3. Run Linter
```bash
npm run lint
```
- Fix any style issues
- Ensure code is clean

### 4. Create Pull Request
- Push current branch to origin
- Create PR with:
  - **Title**: Brief description of changes
  - **Body**:
    - What changed and why
    - How it was tested
    - Any notes for reviewers

### 5. Summary
- Provide link to the PR
- List all commits included
- Note any follow-up tasks

## Usage
```
/test-and-pr
/test-and-pr "Add user profile feature"
```

## Notes
- Will not create PR if tests fail
- Always shows test results before proceeding
- Asks for confirmation before creating PR
