// Source Widget: _SNSArea (home_page.dart)

'use client';

import { useScreenClass } from '@/hooks/useScreenClass';
import { Link } from '@/types/portfolio';
import { LinkButton } from './LinkButton';

interface SNSAreaProps {
  links: Link[];
}

export const SNSArea = ({ links }: SNSAreaProps) => {
  const screenClass = useScreenClass();
  const isPhone = screenClass === 'phone';
  const buttonHeight = isPhone ? undefined : 40;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <LinkButton
          key={index}
          url={link.url}
          faIconName={link.faIconName}
          text={link.text}
          height={buttonHeight}
        />
      ))}
    </div>
  );
};
