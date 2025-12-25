// Source Widget: GalleryPhotoViewWrapper (gallary_photo_view_wrapper.dart)

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface GalleryPhotoViewWrapperProps {
  galleryItems: string[];
  initialIndex: number;
  onClose: () => void;
}

export const GalleryPhotoViewWrapper = ({
  galleryItems,
  initialIndex,
  onClose,
}: GalleryPhotoViewWrapperProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [galleryItems.length, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={galleryItems[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
          <button
            onClick={onClose}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-500/50 hover:bg-gray-500/70 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-bold transition-colors"
          >
            <FaTimes />
            <span>閉じる</span>
          </button>
          {galleryItems.length > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500/50 hover:bg-gray-500/70 text-white p-3 rounded-full transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % galleryItems.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500/50 hover:bg-gray-500/70 text-white p-3 rounded-full transition-colors"
              >
                →
              </button>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
