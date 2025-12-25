// Source Widget: TitleText (home_page.dart)

import { IconType } from 'react-icons';
import { FaNewspaper, FaLaptopCode, FaGraduationCap, FaAward, FaPerson, FaUtensils } from 'react-icons/fa6';

interface TitleTextProps {
  text: string;
  iconName: string;
}

const iconMap: Record<string, IconType> = {
  newspaper: FaNewspaper,
  laptopCode: FaLaptopCode,
  graduationCap: FaGraduationCap,
  award: FaAward,
  person: FaPerson,
  utensils: FaUtensils,
};

export const TitleText = ({ text, iconName }: TitleTextProps) => {
  const Icon = iconMap[iconName] || FaLaptopCode;

  return (
    <div className="flex items-center gap-2.5 pt-12 pb-4">
      <Icon size={24} className="text-label" />
      <h2 className="text-2xl md:text-[28px] font-bold">{text}</h2>
    </div>
  );
};
