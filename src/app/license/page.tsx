// Source Widget: AppLicensePage (license_page.dart)

import Link from 'next/link';

const licenses = [
  { name: 'Next.js', url: 'https://github.com/vercel/next.js/blob/canary/license.md' },
  { name: 'React', url: 'https://github.com/facebook/react/blob/main/LICENSE' },
  { name: 'Tailwind CSS', url: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE' },
  { name: 'Framer Motion', url: 'https://github.com/framer/motion/blob/main/LICENSE.md' },
  { name: 'Recharts', url: 'https://github.com/recharts/recharts/blob/master/LICENSE' },
  { name: 'React Icons', url: 'https://github.com/react-icons/react-icons/blob/master/LICENSE' },
];

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-card-bg">
      <nav className="sticky top-0 z-40 bg-card-bg border-b border-secondary/20 backdrop-blur-lg">
        <div className="max-w-[768px] mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="text-primary mr-4">← 戻る</Link>
          <h1 className="text-lg font-medium text-label">ライセンス</h1>
        </div>
      </nav>
      <main className="max-w-[768px] mx-auto">
        <ul>
          {licenses.map((license, index) => (
            <li key={index} className="border-b border-secondary/20">
              <a
                href={license.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-label hover:bg-grey/30 transition-colors"
              >
                {license.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
