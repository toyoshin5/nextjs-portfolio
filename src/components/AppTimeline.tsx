// Source Widget: AppTimeline (timeline.dart)

import { Profile } from '@/types/portfolio';
import { FaCheck, FaGraduationCap, FaPerson } from 'react-icons/fa6';
import { IconType } from 'react-icons';

interface AppTimelineProps {
  profiles: Profile[];
  isDesktop?: boolean;
}

type TimeLineStyle = 'start' | 'normal' | 'end';

const iconMap: Record<string, IconType> = {
  graduationCap: FaGraduationCap,
  person: FaPerson,
};

export const AppTimeline = ({ profiles, isDesktop = false }: AppTimelineProps) => {
  const getStyle = (profile: Profile, index: number): TimeLineStyle => {
    if (index === 0) return 'start';
    if (index === profiles.length - 1) return 'end';
    return 'normal';
  };

  return (
    <div className="flex flex-col">
      {profiles.map((profile, index) => (
        <TimelineTile
          key={index}
          profile={profile}
          style={getStyle(profile, index)}
          isDesktop={isDesktop}
        />
      ))}
    </div>
  );
};

interface TimelineTileProps {
  profile: Profile;
  style: TimeLineStyle;
  isDesktop: boolean;
}

const TimelineTile = ({ profile, style, isDesktop }: TimelineTileProps) => {
  const Icon = iconMap[profile.faIconName] || FaCheck;
  const dateFontSize = isDesktop ? 'text-base' : 'text-sm';
  const spacing = isDesktop ? 'mb-10' : 'mb-5';
  const iconSize = 30;

  return (
    <div className="flex items-start">
      <div className={`w-20 pt-[21px] ${dateFontSize} font-bold`}>
        {profile.date}
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`w-[3px] h-2.5 ${style === 'start' ? 'bg-transparent' : 'bg-secondary'}`}
        />
        <div className="my-1" />
        <div
          className="w-[30px] h-[30px] rounded-full bg-blue-500 flex items-center justify-center"
        >
          <Icon size={iconSize / 2} className="text-white" />
        </div>
        <div className="my-1" />
        <div
          className={`w-[3px] flex-1 ${style === 'end' ? 'bg-transparent' : 'bg-secondary'}`}
        />
      </div>
      <div className={`ml-2.5 flex-1 mt-[7px] ${spacing}`}>
        <div className="bg-card-bg rounded-xl p-3">
          <p className="text-base">{profile.text}</p>
        </div>
      </div>
    </div>
  );
};
