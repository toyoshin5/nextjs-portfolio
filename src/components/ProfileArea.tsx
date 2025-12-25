// Source Widget: _ProfileArea (home_page.dart)

'use client';

import { Profile } from '@/types/portfolio';
import { TitleText } from './TitleText';
import { AppTimeline } from './AppTimeline';
import { useScreenClass } from '@/hooks/useScreenClass';

interface ProfileAreaProps {
  profiles: Profile[];
}

export const ProfileArea = ({ profiles }: ProfileAreaProps) => {
  const screenClass = useScreenClass();
  const isDesktop = screenClass !== 'phone';

  return (
    <div className="flex flex-col">
      <TitleText text="Profile" iconName="person" />
      <AppTimeline profiles={profiles} isDesktop={isDesktop} />
    </div>
  );
};
