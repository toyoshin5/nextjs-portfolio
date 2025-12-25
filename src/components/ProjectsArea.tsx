// Source Widget: _ProjectsArea (home_page.dart)

'use client';

import { Project } from '@/types/portfolio';
import { TitleText } from './TitleText';
import { ProjectCard } from './ProjectCard';

interface ProjectsAreaProps {
  projects: Project[];
}

export const ProjectsArea = ({ projects }: ProjectsAreaProps) => {
  return (
    <div className="flex flex-col">
      <TitleText text="PROJECTS" iconName="laptopCode" />
      <div className="grid grid-cols-1 min-[550px]:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
