// Source Widget: _NewsArea (home_page.dart)

import { News } from '@/types/portfolio';
import { TitleText } from './TitleText';

interface NewsAreaProps {
  news: News[];
  separated?: boolean;
}

export const NewsArea = ({ news, separated = false }: NewsAreaProps) => {
  return (
    <div className="flex flex-col">
      <TitleText text="NEWS" iconName="newspaper" />
      {separated ? (
        news.map((item, index) => (
          <div
            key={index}
            className="w-full bg-card-bg rounded-xl px-4 pt-4 pb-0 mb-5"
          >
            <p className="text-sm text-secondary">{item.date}</p>
            <p className="text-base">{item.text}</p>
            <div className="h-4" />
          </div>
        ))
      ) : (
        <div className="w-full bg-card-bg rounded-xl px-4 pt-4 pb-0">
          {news.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-secondary">{item.date}</p>
              <p className="text-base">{item.text}</p>
              <div className="h-4" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
