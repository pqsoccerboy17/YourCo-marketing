# Safe Commit

Review changes and commit with a clear message.

## Steps
1. **Show Status**
   ```bash
   git status
   ```
   - List all changed files
   - Explain what each change does

2. **Review Changes**
   ```bash
   git diff
   ```
   - Show the actual code changes
   - Highlight anything that looks risky
   - Check for accidentally included secrets/keys

3. **Run Tests**
   ```bash
   npm run test
   ```
   - Ensure nothing is broken
   - Report any failures

4. **Stage & Commit**
   - Only proceed if tests pass
   - Write descriptive commit message following convention:
     - `feat:` for new features
     - `fix:` for bug fixes
     - `docs:` for documentation
     - `refactor:` for code cleanup
     - `test:` for adding tests

5. **Confirm Before Push**
   - Show the commit that was created
   - Ask for confirmation before pushing

## Usage
```
/safe-commit
/safe-commit "add user authentication"
```
