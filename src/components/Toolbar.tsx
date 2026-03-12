import React from 'react';

interface ToolbarProps {
  penColor: string;
  setPenColor: (color: string) => void;
  penSize: number;
  setPenSize: (size: number) => void;
  rainbowMode: boolean;
  setRainbowMode: (enabled: boolean) => void;
  onClear: () => void;
  onSave: () => void;
  onLoad: (dataUrl: string) => void;
}

const COLORS = [
  '#000000',
  '#FF0000',
  '#0066FF',
  '#00AA00',
  '#FF9900',
  '#9900FF',
];

const SIZES = [
  { label: 'S', size: 3 },
  { label: 'M', size: 8 },
  { label: 'L', size: 15 },
];

export function Toolbar({
  penColor,
  setPenColor,
  penSize,
  setPenSize,
  rainbowMode,
  setRainbowMode,
  onClear,
  onSave,
  onLoad,
}: ToolbarProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleLoadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) onLoad(dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <span className="toolbar-label">Size</span>
        <div className="toolbar-buttons">
          {SIZES.map(({ label, size }) => (
            <button
              key={size}
              className={`toolbar-btn ${penSize === size ? 'active' : ''}`}
              onClick={() => setPenSize(size)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-section">
        <span className="toolbar-label">Color</span>
        <div className="toolbar-buttons colors">
          {COLORS.map((color) => (
            <button
              key={color}
              className={`color-btn ${penColor === color && !rainbowMode ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setPenColor(color);
                setRainbowMode(false);
              }}
            />
          ))}
          <button
            className={`rainbow-btn ${rainbowMode ? 'active' : ''}`}
            onClick={() => setRainbowMode(!rainbowMode)}
            title="Rainbow mode"
          >
            🌈
          </button>
        </div>
      </div>

      <div className="toolbar-section">
        <span className="toolbar-label">Actions</span>
        <div className="toolbar-buttons">
          <button className="toolbar-btn" onClick={onClear}>
            Clear
          </button>
          <button className="toolbar-btn" onClick={onSave}>
            Save
          </button>
          <button className="toolbar-btn" onClick={handleLoadClick}>
            Load
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

