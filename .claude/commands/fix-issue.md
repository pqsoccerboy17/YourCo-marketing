# Fix GitHub Issue

Analyze and fix a GitHub issue with full automation.

## Steps
1. **Understand the Issue**
   - Read the issue description carefully
   - Identify the root cause
   - Explain the problem in simple terms

2. **Plan the Fix**
   - Outline what files need to change
   - Describe the approach before coding
   - Get confirmation if the fix is complex

3. **Implement**
   - Make minimal, focused changes
   - Add comments explaining the fix
   - Keep changes small and reviewable

4. **Test**
   - Run the test suite: `npm run test`
   - Add new tests if needed
   - Verify the fix works as expected

5. **Commit & PR**
   - Stage changes: `git add .`
   - Commit with message: `fix: [brief description] (closes #ISSUE_NUMBER)`
   - Create PR with summary

## Usage
```
/fix-issue [issue number or description]
```

## Example
```
/fix-issue 42
/fix-issue "login button not working on mobile"
```
