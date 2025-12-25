// Source Widget: HomePage (home_page.dart)

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { profileData, calculateAge, cookImages, cookThumbnails } from '@/data/profileData';
import { CircleImage } from '@/components/CircleImage';
import { HelloText } from '@/components/HelloText';
import { ScrollContentsArea } from '@/components/ScrollContentsArea';

export default function HomePage() {
  const [headerHeight, setHeaderHeight] = useState(500);
  const age = calculateAge(profileData.overview.birthday);

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const maxHeight = Math.min(
        window.innerHeight - 200,
        window.innerWidth
      );
      setHeaderHeight(maxHeight);
    };

    calculateHeaderHeight();
    window.addEventListener('resize', calculateHeaderHeight);
    return () => window.removeEventListener('resize', calculateHeaderHeight);
  }, []);

  return (
    <div className="min-h-screen bg-grouped-bg">
      <div className="relative w-full">
        <div
          className="absolute top-0 left-0 right-0 overflow-hidden"
          style={{ height: headerHeight + 100 }}
        >
          <Image
            src="/images/background.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative">
          <HelloText
            headerHeight={headerHeight}
            text={profileData.overview.hello}
          />
          <div className="relative">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[60px] z-10"
            >
              <div className="bg-grouped-bg rounded-full p-2.5">
                <CircleImage
                  src={profileData.overview.imageUrl}
                  size={100}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="bg-grouped-bg rounded-t-[20px] pt-[60px] px-4">
              <ScrollContentsArea
                portfolio={profileData}
                age={age}
                cookImages={cookImages}
                cookThumbnails={cookThumbnails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
