// Source Widget: CookPage (cook_page.dart)

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cookImages, cookThumbnails } from '@/data/profileData';
import { GalleryPhotoViewWrapper } from '@/components/GalleryPhotoViewWrapper';
import { useScreenClass } from '@/hooks/useScreenClass';

export default function CookPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const screenClass = useScreenClass();
  const isPhone = screenClass === 'phone';
  const gridCols = isPhone ? 'grid-cols-3' : 'grid-cols-4';

  const handleImageClick = (index: number) => {
    setLoadingIndex(index);
    const img = new window.Image();
    img.src = cookImages[index];
    img.onload = () => {
      setLoadingIndex(null);
      setSelectedIndex(index);
      setGalleryOpen(true);
    };
  };

  return (
    <div className="min-h-screen bg-card-bg">
      <nav className="sticky top-0 z-40 bg-card-bg border-b border-secondary/20 backdrop-blur-lg">
        <div className="max-w-[768px] mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="text-primary mr-4">← 戻る</Link>
          <h1 className="text-lg font-medium text-label">Cooking</h1>
        </div>
      </nav>
      <main className="max-w-[768px] mx-auto px-4 py-4">
        <div className={`grid ${gridCols} gap-1`}>
          {cookThumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className="aspect-square relative cursor-pointer rounded-xl overflow-hidden"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={thumbnail}
                alt={`Cooking ${index + 1}`}
                fill
                className="object-cover"
              />
              {loadingIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      {galleryOpen && (
        <GalleryPhotoViewWrapper
          galleryItems={cookImages}
          initialIndex={selectedIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
}
