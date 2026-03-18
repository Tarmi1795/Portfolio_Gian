import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ProfileAnimationProps {
  isDark: boolean;
  className?: string;
}

const FRAME_COUNT = 82; // 000 to 081
const BASE_PATH = '/profile-sequence/0318_';
const FILE_EXT = '.png';
const ANIMATION_DURATION = 5500; // 5.5 seconds

/**
 * Hook to preload images and ensure they are cached.
 */
const useImagePreloader = (imagePaths: string[]) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];

    const loadImage = (path: string, index: number) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedCount++;
        preloadedImages[index] = img;
        if (loadedCount === imagePaths.length) {
          setImages(preloadedImages);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image at ${path}`);
        setError(`Failed to load frame ${index}`);
      };
    };

    imagePaths.forEach((path, index) => {
      loadImage(path, index);
    });
  }, [imagePaths]);

  return { images, isLoaded, error };
};

const ProfileAnimation: React.FC<ProfileAnimationProps> = ({ isDark, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(null);
  
  // Current progress normalized (0 to 1)
  const progressRef = useRef(isDark ? 1 : 0);
  
  // Generate paths
  const imagePaths = Array.from({ length: FRAME_COUNT }, (_, i) => {
    const frameNum = i.toString().padStart(3, '0');
    return `${BASE_PATH}${frameNum}${FILE_EXT}`;
  });

  const { images, isLoaded } = useImagePreloader(imagePaths);

  const drawFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.length) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate frame index from progress (0 to 1)
    const index = Math.min(
      Math.floor(progress * (FRAME_COUNT - 1)),
      FRAME_COUNT - 1
    );
    
    const img = images[index];
    if (!img) return;

    // ASPECT RATIO FIX (Object-Fit: Cover)
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;
    
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller or same as canvas
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw image with cover logic
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined && lastTimeRef.current !== null) {
      const deltaTime = time - lastTimeRef.current;
      const step = deltaTime / ANIMATION_DURATION;
      
      const targetProgress = isDark ? 1 : 0;
      
      if (progressRef.current !== targetProgress) {
        if (progressRef.current < targetProgress) {
          progressRef.current = Math.min(progressRef.current + step, targetProgress);
        } else {
          progressRef.current = Math.max(progressRef.current - step, targetProgress);
        }
        drawFrame(progressRef.current);
      }
    }
    
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [isDark, drawFrame]);

  useEffect(() => {
    if (isLoaded) {
      // Inital draw
      drawFrame(progressRef.current);
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isLoaded, animate, drawFrame]);

  return (
    <div className={`relative ${className}`}>
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: isDark ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 rounded-[2.5rem] blur-2xl ${isDark ? 'bg-amber-500/20' : 'bg-amber-500/30'}`}
      />

      {/* Canvas Container */}
      <div className={`relative h-full w-full rounded-[2.5rem] border-2 flex items-center justify-center overflow-hidden backdrop-blur-sm transition-all duration-500 ${
        isDark ? 'bg-neutral-900/80 border-amber-500/50' : 'bg-white/80 border-amber-500/30 shadow-xl'
      }`}>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={400} // Drawing resolution
          height={400}
          className="w-full h-full object-contain"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        />
      </div>

      {/* Static Corner Accents to match Hero style */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-amber-500/40" />
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-amber-500/40" />
    </div>
  );
};

export default ProfileAnimation;
