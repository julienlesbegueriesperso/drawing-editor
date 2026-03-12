import { useRef, useState } from 'react';
import { Canvas } from './components/Canvas';
import type { CanvasRef } from './components/Canvas';
import { Toolbar } from './components/Toolbar';
import './App.css';

function App() {
  const [penColor, setPenColor] = useState('#000000');
  const [penSize, setPenSize] = useState(8);
  const [rainbowMode, setRainbowMode] = useState(false);
  const canvasRef = useRef<CanvasRef>(null);

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleSave = () => {
    const dataUrl = canvasRef.current?.save();
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = dataUrl;
    link.click();
  };

  const handleLoad = (dataUrl: string) => {
    canvasRef.current?.load(dataUrl);
  };

  return (
    <div className="app">
      <h1 className="app-title">Drawing Editor</h1>
      <Toolbar
        penColor={penColor}
        setPenColor={setPenColor}
        penSize={penSize}
        setPenSize={setPenSize}
        rainbowMode={rainbowMode}
        setRainbowMode={setRainbowMode}
        onClear={handleClear}
        onSave={handleSave}
        onLoad={handleLoad}
      />
      <div className="canvas-container">
        <Canvas
          ref={canvasRef}
          penColor={penColor}
          penSize={penSize}
          rainbowMode={rainbowMode}
        />
      </div>
    </div>
  );
}

export default App;
