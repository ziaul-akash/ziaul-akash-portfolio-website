import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  caption: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, src, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        className="max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={caption}
          className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-sm font-mono text-slate-300 text-center max-w-2xl">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
