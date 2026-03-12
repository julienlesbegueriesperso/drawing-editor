# Drawing Editor

A React-based drawing application with freehand drawing capabilities.

## Features

- **Freehand Drawing**: Smooth drawing with mouse or touch input
- **Pen Sizes**: 3 sizes (Small 3px, Medium 8px, Large 15px)
- **Colors**: 6 preset colors (Black, Red, Blue, Green, Orange, Purple)
- **Rainbow Mode**: Cycles through 7 colors while drawing for colorful strokes
- **Clear Canvas**: Reset the canvas with one click
- **Save as PNG**: Download your drawing as a PNG image
- **Load PNG**: Load an existing PNG file to continue editing

## Tech Stack

- React 19
- TypeScript
- Vite
- HTML5 Canvas API

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Canvas.tsx      # Drawing canvas component
│   └── Toolbar.tsx     # Tool buttons (pen sizes, colors, actions)
├── App.tsx             # Main app component
├── App.css             # Styles
└── main.tsx            # Entry point
```
