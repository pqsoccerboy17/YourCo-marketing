# Mycel Website

AI GTM strategy consulting for PE-backed companies. We help turn AI tool sprawl into investor-ready adoption stories.

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4
- **Typography:** System font stack (no external fonts)
- **Theme:** Light/Dark mode (toggle with `data-theme="dark"`)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Brand System

Colors, typography, and component specifications are documented in [CLAUDE.md](CLAUDE.md).

### Key Colors
- **Amber:** `#d97706` (primary accent)
- **Text Primary:** `#1c1917` (Stone 900)
- **Background:** `#fafaf9` (Stone 50)

### Typography
- **H1:** 56px / 40px mobile
- **H2:** 40px / 32px mobile
- **H3:** 28px / 24px mobile

## Project Structure

```
src/
├── App.jsx          # Main application component
├── index.css        # Global styles + Mycel design tokens
└── main.jsx         # React entry point
public/
└── favicon.svg      # Mycel branching node favicon
```

## Related Resources

- **Handoff Doc:** `CLAUDE_CODE_HANDOFF.md` in Downloads
- **GitHub:** https://github.com/pqsoccerboy17/mycel-website
