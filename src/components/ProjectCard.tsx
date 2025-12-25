// Source Widget: ProjectCard (project_card.dart)

import Image from 'next/image';
import { Project } from '@/types/portfolio';
import { Budge } from './Budge';
import { LinkButton } from './LinkButton';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full bg-card-bg rounded-tl-[48px] rounded-tr-[12px] rounded-br-[48px] rounded-bl-[12px] overflow-hidden">
      <div className="relative w-full aspect-video rounded-tl-[48px] rounded-tr-[12px] overflow-hidden">
        <Image
          src={`/images/${project.imagePath}`}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 pb-3">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.budges.map((budge, index) => (
            <Budge key={index} type={budge} />
          ))}
        </div>
        <p className="mt-2 text-base">{project.description}</p>
        <div className="mt-2">
          {project.url && (
            <div className="mb-2">
              <LinkButton url={project.url} faIconName="link" text="See More" width={120} />
            </div>
          )}
          <p className="text-secondary">{project.date}</p>
        </div>
      </div>
    </div>
  );
};
