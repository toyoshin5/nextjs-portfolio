// Source Widget: _AboutThisSiteArea (home_page.dart)

import Link from 'next/link';

export const AboutThisSiteArea = () => {
  return (
    <div className="flex flex-col items-center w-full pt-32 pb-16">
      <p className="text-center">このポートフォリオはNext.jsで作成しました</p>
      <Link
        href="/license"
        className="text-primary hover:underline mt-2"
      >
        ライセンス情報
      </Link>
      <p className="text-sm text-gray-500 mt-2">
        © 2024 Shingo Toyoda All Rights Reserved.
      </p>
    </div>
  );
};
