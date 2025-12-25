// Source Widget: LinkButton (link_button.dart)

import { IconType } from 'react-icons';
import { FaLocationDot, FaGithub, FaXTwitter, FaAppStore, FaFacebook, FaInstagram, FaLaptopCode, FaLink, FaGraduationCap, FaPerson } from 'react-icons/fa6';

interface LinkButtonProps {
  url: string;
  faIconName: string;
  text?: string;
  width?: number;
  height?: number;
}

const faIconMap: Record<string, IconType> = {
  locationDot: FaLocationDot,
  github: FaGithub,
  'x-twitter': FaXTwitter,
  appStore: FaAppStore,
  facebook: FaFacebook,
  instagram: FaInstagram,
  laptopCode: FaLaptopCode,
  link: FaLink,
  graduationCap: FaGraduationCap,
  person: FaPerson,
};

export const LinkButton = ({ url, faIconName, text, width, height }: LinkButtonProps) => {
  const Icon = faIconMap[faIconName] || FaLink;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-grey text-label rounded-lg font-bold text-sm hover:opacity-80 transition-opacity"
      style={{ width: width, height: height }}
    >
      <Icon size={18} />
      {text && <span>{text}</span>}
    </a>
  );
};
