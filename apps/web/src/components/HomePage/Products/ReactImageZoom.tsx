import { type MouseEvent, useRef, useState } from "react";

interface ReactImageZoomProps {
  src: string;
  zoomScale?: number;
  width?: number;
  height?: number;
}

const ReactImageZoom: React.FC<ReactImageZoomProps> = ({
  src,
  zoomScale = 2,
  width = 400,
  height = 400,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    display: "block",
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const bgPosX = (x / rect.width) * 100;
    const bgPosY = (y / rect.height) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${src})`,
      backgroundSize: `${rect.width * zoomScale}px ${
        rect.height * zoomScale
      }px`,
      backgroundPosition: `${bgPosX}% ${bgPosY}%`,
      backgroundRepeat: "no-repeat",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        cursor: "zoom-in",
        ...zoomStyle,
      }}
    >
      <img
        src={src}
        alt="Zoom"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default ReactImageZoom;
