# Artistic Drawing Editor - Specification

## Project Overview
- **Project Name**: Atelier - Artistic Drawing Editor
- **Type**: Interactive web application (single HTML with p5.js)
- **Core Functionality**: A creative drawing canvas with multicolor brushes, artistic tools, and beautiful UI for making colorful artwork
- **Target Users**: Artists, hobbyists, anyone who wants to create beautiful digital drawings

## UI/UX Specification

### Layout Structure
- **Full-screen canvas** - Main drawing area takes majority of screen
- **Floating toolbar** - Left side, vertical tool palette
- **Color panel** - Right side, collapsible color picker
- **Top bar** - Minimal, contains canvas name and export options

### Visual Design

**Aesthetic Direction**: "Art Studio" - Warm, inviting, tactile feel like a real artist's studio

**Color Palette**:
- Background: `#1a1815` (warm charcoal)
- Panel background: `#252220` (warm dark brown)
- Accent: `#e8c547` (golden ochre)
- Secondary accent: `#c75d3a` (burnt sienna)
- Text: `#f5f0e8` (warm white)
- Muted text: `#8a847a` (warm gray)

**Typography**:
- Display: "Playfair Display" - elegant serif for headings
- UI: "DM Sans" - clean, modern sans-serif for controls

**Visual Effects**:
- Subtle wood-grain texture on panels
- Soft glow on active tools
- Smooth hover transitions (0.2s ease)
- Canvas has subtle paper texture

### Components

**Tool Palette (Left)**:
- Brush tool (default)
- Spray brush (particles)
- Ribbon brush (flowing curves)
- Eraser tool
- Color picker (eyedropper)
- Undo button
- Clear canvas button

**Brush Settings**:
- Size slider (1-100)
- Opacity slider (0-100%)
- Flow slider (for spray/ribbon brushes)

**Color Panel (Right)**:
- Current color display (large)
- Hue wheel or gradient picker
- Preset color palettes (8 beautiful schemes):
  - Sunset (warm oranges, pinks, purples)
  - Ocean (teals, blues, aquas)
  - Forest (greens, browns, golds)
  - Pastel (soft pinks, lavenders, mints)
  - Neon (bright electric colors)
  - Earth (terracotta, sienna, umber)
  - Monochrome (black to white with warm tints)
  - Rainbow (full spectrum)
- Recent colors row (last 8 used)
- Custom color input (hex)

**Canvas**:
- White background with subtle texture
- Subtle shadow frame
- Aspect ratio: Flexible, fills available space

**Actions**:
- Export as PNG
- Export as JPG
- New canvas (with confirmation if not empty)

## Functionality Specification

### Core Features

1. **Drawing with Mouse/Touch**
   - Smooth line rendering with pressure-like variation
   - Continuous stroke detection
   - Support for mouse and touch devices

2. **Brush Types**
   - **Basic Brush**: Solid color, variable size, soft edges option
   - **Spray Brush**: Particle-based, scattered dots, density based on speed
   - **Ribbon Brush**: Multiple parallel lines that follow cursor path
   - **Eraser**: Removes to white with adjustable size

3. **Color System**
   - Click color in palette to select
   - Hue/saturation picker
   - Hex input for precise color
   - Recent colors automatically saved

4. **Undo System**
   - Store last 50 strokes
   - Undo button removes last stroke
   - Works with all brush types

5. **Canvas Controls**
   - Clear all (with confirmation)
   - Export to PNG/JPG
   - Responsive to window resize

### User Interactions
- Click and drag to draw
- Scroll wheel changes brush size (when over canvas)
- Keyboard shortcuts:
  - B: Basic brush
  - S: Spray brush
  - R: Ribbon brush
  - E: Eraser
  - Ctrl+Z: Undo
  - Ctrl+S: Save

### Edge Cases
- Window resize: Canvas adjusts, content preserved
- Touch devices: Proper touch event handling
- Empty undo on clear: Reset undo history

## Acceptance Criteria

1. Canvas renders and accepts drawing input
2. All 4 brush types work with distinct visual results
3. Color palette allows selection of any color
4. Preset palettes display 8 colors each, clickable
5. Undo removes last stroke
6. Clear prompts for confirmation
7. Export downloads image file
8. UI matches warm "art studio" aesthetic
9. Responsive to window resize
10. Keyboard shortcuts work