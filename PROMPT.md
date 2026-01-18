# Ralph Wiggum Task Prompt

## Task
[DESCRIBE YOUR TASK HERE]

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Constraints
- Run `npm run dev` to verify changes visually
- Test both light and dark mode
- Test responsive at 375px, 768px, 1024px
- Do not modify files outside of `src/`
- Follow brand system in CLAUDE.md

## Completion
When ALL success criteria are met:
1. Run `npm run build` to verify no errors
2. Commit: `git add . && git commit -m "feat/fix: description\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"`
3. Output: <promise>COMPLETE</promise>

---

## Example: Styling Update

### Task
Update the hero section to better match the brand-preview.html design.

### Success Criteria
- [ ] Hero background uses --bg-page variable
- [ ] Primary CTA button uses --terracotta color
- [ ] Hover state uses --terracotta-dark
- [ ] Dark mode colors work correctly
- [ ] Mobile layout looks good at 375px

### Constraints
- Run `npm run dev` to verify changes visually
- Test both light and dark mode
- Only modify `src/App.jsx` and `src/index.css`
- Follow brand system in CLAUDE.md

### Completion
When ALL success criteria are met:
1. Run `npm run build` to verify no errors
2. Commit changes with descriptive message
3. Output: <promise>COMPLETE</promise>

---

## Example: Content Update

### Task
Update homepage copy to match the handoff document messaging.

### Success Criteria
- [ ] Hero headline: "Your board wants an AI story..."
- [ ] Subheadline mentions 4-6 weeks
- [ ] Problem section has Adoption Paradox stats (84%/60%)
- [ ] CTA says "Book a Discovery Call"
- [ ] Footer tagline updated

### Constraints
- Run `npm run dev` to verify changes visually
- Only modify content, not layout/structure
- Keep existing component structure
- Follow brand voice (professional but warm)

### Completion
When ALL success criteria are met:
1. Run `npm run build` to verify no errors
2. Commit: "content: Update homepage copy to PE-focused messaging"
3. Output: <promise>COMPLETE</promise>
