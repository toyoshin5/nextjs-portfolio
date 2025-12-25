// Source Widget: _IntroArea (home_page.dart)

interface IntroAreaProps {
  introduction: string;
}

export const IntroArea = ({ introduction }: IntroAreaProps) => {
  return (
    <p className="text-base whitespace-preline">{introduction}</p>
  );
};
