// Source Widget: _MyNameArea (home_page.dart)

'use client';

import { useScreenClass } from '@/hooks/useScreenClass';
import { Overview } from '@/types/portfolio';

interface MyNameAreaProps {
  overview: Overview;
  age: number;
}

export const MyNameArea = ({ overview, age }: MyNameAreaProps) => {
  const screenClass = useScreenClass();
  const isPhone = screenClass === 'phone';

  return (
    <div className="w-full flex flex-col">
      <h1 className={`font-bold ${isPhone ? 'text-[28px]' : 'text-[34px]'}`}>
        {overview.eName}
      </h1>
      <p className="text-base font-bold text-secondary">
        {overview.name} ({age})
      </p>
      <p className="text-base text-secondary">
        {overview.position}
      </p>
    </div>
  );
};
