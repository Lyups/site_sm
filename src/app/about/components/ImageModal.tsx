import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa';

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext?.();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
        >
          <FaTimes size={24} />
        </button>

        {/* Кнопка зума */}
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
        >
          {isZoomed ? <FaCompress size={24} /> : <FaExpand size={24} />}
        </button>

        {/* Навигационные кнопки */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
          >
            <FaChevronLeft size={24} />
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-3 rounded-full"
          >
            <FaChevronRight size={24} />
          </button>
        )}

        {/* Изображение */}
        <div className={`relative max-w-[90%] max-h-[90%] transition-all duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Подпись к изображению */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg">
          {image.alt}
        </div>
      </div>
    </div>
  );
}; 