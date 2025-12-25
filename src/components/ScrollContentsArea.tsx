// Source Widget: ScrollContentsArea (home_page.dart)

'use client';

import { Portfolio } from '@/types/portfolio';
import { useScreenClass } from '@/hooks/useScreenClass';
import { MyNameArea } from './MyNameArea';
import { SNSArea } from './SNSArea';
import { IntroArea } from './IntroArea';
import { NewsArea } from './NewsArea';
import { ProjectsArea } from './ProjectsArea';
import { SkillArea } from './SkillArea';
import { AwardArea } from './AwardArea';
import { ProfileArea } from './ProfileArea';
import { CookArea } from './CookArea';
import { AboutThisSiteArea } from './AboutThisSiteArea';

interface ScrollContentsAreaProps {
  portfolio: Portfolio;
  age: number;
  cookImages: string[];
  cookThumbnails: string[];
}

export const ScrollContentsArea = ({
  portfolio,
  age,
  cookImages,
  cookThumbnails,
}: ScrollContentsAreaProps) => {
  const screenClass = useScreenClass();
  const isDesktop = screenClass === 'desktop';

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-center items-start w-full">
        <div className="flex-[3] max-w-[768px] flex flex-col">
          <MyNameArea overview={portfolio.overview} age={age} />
          <div className="h-6" />
          <SNSArea links={portfolio.overview.links} />
          {isDesktop ? (
            <hr className="my-12 border-secondary/30" />
          ) : (
            <div className="h-6" />
          )}
          <IntroArea introduction={portfolio.overview.introduction} />
          {!isDesktop && <NewsArea news={portfolio.news} />}
          <ProjectsArea projects={portfolio.projects} />
          <SkillArea skills={portfolio.skills} />
          <AwardArea awards={portfolio.awards} />
          <ProfileArea profiles={portfolio.profile} />
          <CookArea cookImages={cookImages} cookThumbnails={cookThumbnails} />
        </div>
        {isDesktop && (
          <>
            <div className="w-4" />
            <div className="flex-1">
              <NewsArea news={portfolio.news} separated />
            </div>
          </>
        )}
      </div>
      <AboutThisSiteArea />
    </div>
  );
};
