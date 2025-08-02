import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ImageMarquee = ({
  images = [],
  speed = 40,
  direction = 'left',
  className = '',
  imageClassName = '',
  containerHeight = '300px'
}) => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerElement = containerRef.current;

    if (!marqueeElement || !containerElement) return;

    const imageElements = marqueeElement.querySelectorAll('img');
    let loadedImages = 0;

    const startAnimation = () => {
      const totalWidth = marqueeElement.scrollWidth;
      const singleSetWidth = totalWidth / 2;
      const duration = singleSetWidth / speed;

      gsap.set(marqueeElement, { x: 0 });

      animationRef.current = gsap.to(marqueeElement, {
        x: -singleSetWidth,
        duration: duration,
        ease: 'none',
        repeat: -1
      });

      const handleMouseEnter = () => {
        gsap.to(animationRef.current, {
          timeScale: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(animationRef.current, {
          timeScale: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      containerElement.addEventListener('mouseenter', handleMouseEnter);
      containerElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
        }
        containerElement.removeEventListener('mouseenter', handleMouseEnter);
        containerElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    if (imageElements.length === 0) {
      startAnimation();
    } else {
      imageElements.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === imageElements.length) {
              startAnimation();
            }
          };
          img.onerror = () => {
            console.error('Failed to load image:', img.src);
            loadedImages++;
            if (loadedImages === imageElements.length) {
              startAnimation();
            }
          };
        }
      });

      if (loadedImages === imageElements.length) {
        startAnimation();
      }
    }

    return startAnimation;

  }, [images, speed, direction]);

  if (!images.length) return null;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${className}`}
      style={{ height: containerHeight }}
    >
      <div
        ref={marqueeRef}
        className="inline-flex items-center gap-6"
        style={{ willChange: 'transform' }}
      >
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="relative group flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt || `Food image ${index + 1}`}
              className={`h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 ${imageClassName}`}
              style={{
                width: image.width || 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              onError={(e) => {
                console.error('Local image failed to load:', image.src);
                // Keep trying to load the original source or show a simple fallback
                if (!e.target.dataset.fallbackTried) {
                  e.target.dataset.fallbackTried = 'true';
                  // Try a different approach for local images
                  setTimeout(() => {
                    e.target.src = image.src + '?t=' + Date.now();
                  }, 100);
                }
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}

        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="relative group flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt || `Food image ${index + 1}`}
              className={`h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 ${imageClassName}`}
              style={{
                width: image.width || 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              onError={(e) => {
                console.error('Local image failed to load:', image.src);
                if (!e.target.dataset.fallbackTried) {
                  e.target.dataset.fallbackTried = 'true';
                  setTimeout(() => {
                    e.target.src = image.src + '?t=' + Date.now();
                  }, 100);
                }
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ImageMarquee;
