// Source Widget: _AwardArea (home_page.dart)

import { Award } from '@/types/portfolio';
import { TitleText } from './TitleText';

interface AwardAreaProps {
  awards: Award[];
}

export const AwardArea = ({ awards }: AwardAreaProps) => {
  return (
    <div className="flex flex-col">
      <TitleText text="AWARDS" iconName="award" />
      <div className="w-full bg-card-bg rounded-xl p-4">
        {awards.map((award, index) => (
          <div key={index}>
            <p className="text-sm text-secondary">{award.date}</p>
            <div className="h-1.5" />
            <p className="text-base">{award.text}</p>
            {index < awards.length - 1 && (
              <hr className="my-6 border-secondary/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
