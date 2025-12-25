// Source: profile.dart, budge.dart

export type BudgeType =
  | 'flutter'
  | 'swift'
  | 'uikit'
  | 'swiftui'
  | 'kotlin'
  | 'react'
  | 'reactNative'
  | 'unrealengine'
  | 'hackerson'
  | 'contest'
  | 'personal'
  | 'team';

export interface Link {
  url: string;
  faIconName: string;
  text: string;
}

export interface Overview {
  name: string;
  eName: string;
  hello: string;
  birthday: string;
  imageUrl: string;
  position: string;
  introduction: string;
  links: Link[];
}

export interface News {
  date: string;
  text: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  url?: string;
  imagePath: string;
  budges: BudgeType[];
}

export interface Skill {
  language: string;
  languageFull: string;
  level: number;
}

export interface Award {
  date: string;
  text: string;
}

export interface Profile {
  date: string;
  text: string;
  faIconName: string;
}

export interface Portfolio {
  overview: Overview;
  news: News[];
  projects: Project[];
  skills: Skill[];
  awards: Award[];
  profile: Profile[];
}
