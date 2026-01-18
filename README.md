# [YourCo] Consulting Website

AI GTM strategy consulting for PE-backed companies. We help turn AI tool sprawl into investor-ready adoption stories.

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS 4
- **Typography:** DM Sans (Google Fonts)
- **Theme:** Light/Dark mode (system preference)

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
| `npm run setup:notion` | Create Notion activity database |

## Brand System

Colors, typography, and component specifications are documented in [CLAUDE.md](CLAUDE.md).

### Key Colors
- **Terracotta:** `#C4765B` (primary accent)
- **Text Primary:** `#2D2A26` (warm charcoal)
- **Background:** `#FAF9F7` (warm white)

### Typography
- **H1:** 56px / 40px mobile
- **H2:** 40px / 32px mobile
- **H3:** 28px / 24px mobile

## Project Structure

```
src/
├── App.jsx          # Main application component
├── index.css        # Global styles + brand system
└── main.jsx         # React entry point
scripts/
└── setup-notion.js  # Notion database setup
```

## Related Resources

- **Handoff Doc:** `CLAUDE_CODE_HANDOFF.md` in Downloads
- **Notion Hub:** https://www.notion.so/2da9df26e0408119ad22ee878e8d9e0c
- **GitHub:** https://github.com/pqsoccerboy17/YourCo
