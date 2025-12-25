// Source Widget: _SkillArea (home_page.dart)

import { Skill } from '@/types/portfolio';
import { TitleText } from './TitleText';
import { SkillGraph } from './SkillGraph';

interface SkillAreaProps {
  skills: Skill[];
}

export const SkillArea = ({ skills }: SkillAreaProps) => {
  return (
    <div className="flex flex-col">
      <TitleText text="SKILLS" iconName="graduationCap" />
      <SkillGraph skills={skills} height={600} />
    </div>
  );
};
