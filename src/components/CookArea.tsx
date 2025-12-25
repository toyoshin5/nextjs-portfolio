// Source Widget: _CookArea (home_page.dart)

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TitleText } from './TitleText';
import { GalleryPhotoViewWrapper } from './GalleryPhotoViewWrapper';

interface CookAreaProps {
  cookImages: string[];
  cookThumbnails: string[];
}

export const CookArea = ({ cookImages, cookThumbnails }: CookAreaProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const displayImages = cookImages.slice(0, 4);
  const displayThumbnails = cookThumbnails.slice(0, 4);

  const handleImageClick = (index: number) => {
    setLoadingIndex(index);
    const img = new window.Image();
    img.src = displayImages[index];
    img.onload = () => {
      setLoadingIndex(null);
      setSelectedIndex(index);
      setGalleryOpen(true);
    };
  };

  return (
    <div className="flex flex-col">
      <TitleText text="Cooking" iconName="utensils" />
      <div className="h-4" />
      <div className="flex gap-2">
        {displayThumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className="flex-1 aspect-square relative cursor-pointer rounded-xl overflow-hidden"
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
      <div className="h-6" />
      <Link
        href="/cook"
        className="w-full h-11 bg-card-bg rounded-xl flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
      >
        もっと見る
      </Link>
      {galleryOpen && (
        <GalleryPhotoViewWrapper
          galleryItems={displayImages}
          initialIndex={selectedIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </div>
  );
};
