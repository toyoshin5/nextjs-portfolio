// Source Widget: Budge (budge.dart)

import React from 'react';
import { BudgeType } from '@/types/portfolio';

interface BudgeProps {
  type: BudgeType;
}

const typeTexts: Record<BudgeType, string> = {
  flutter: 'Flutter',
  swift: 'Swift',
  uikit: 'UIKit',
  swiftui: 'SwiftUI',
  kotlin: 'Kotlin',
  react: 'React',
  reactNative: 'ReactNative',
  unrealengine: 'UnrealEngine',
  hackerson: 'ハッカソン',
  contest: 'コンテスト',
  personal: '個人開発',
  team: 'チーム開発',
};

const typeColors: Record<BudgeType, string> = {
  flutter: '#0175C2',
  swift: '#FA7343',
  uikit: '#007AFF',
  swiftui: '#007AFF',
  kotlin: '#0095D5',
  react: '#61DAFB',
  reactNative: '#61DAFB',
  unrealengine: '#1B4F72',
  hackerson: '#000000',
  contest: '#000000',
  personal: '#FF4500',
  team: '#FF4500',
};

export const Budge = ({ type }: BudgeProps) => {
  const text = typeTexts[type];
  const color = typeColors[type];

  return (
    <span
      className="inline-block px-2 py-1 rounded-full text-sm font-bold text-white leading-tight"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
};
