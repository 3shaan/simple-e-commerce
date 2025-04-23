"use client";

import Image from "next/image";
import type React from "react";
import { useRef, useState } from "react";

// Define props interface
interface ImageZoomProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomScale?: number;
  className?: string;
}

// Define mouse position interface
interface MousePosition {
  x: number;
  y: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  src,
  alt,
  width,
  height,
  zoomScale = 2,
  className = "",
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      // Calculate position as percentage of container (0 to 1)
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setMousePosition({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        cursor: "crosshair",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={` ${className}`}
        style={{
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          transition: "transform 0.1s ease-out",
          transformOrigin: `${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%`,
          transform: isHovering ? `scale(${zoomScale})` : "scale(1)",
        }}
      />
    </div>
  );
};

export default ImageZoom;
