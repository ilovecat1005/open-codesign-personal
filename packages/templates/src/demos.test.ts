import { describe, expect, it } from 'vitest';
import { getDemos } from './index';

describe('built-in demo localization', () => {
  it('ships Traditional Chinese demo prompts', () => {
    const en = getDemos('en');
    const zhTW = getDemos('zh-TW');
    expect(zhTW).toHaveLength(en.length);
    expect(zhTW[0]?.title).toBe('Calm Spaces 冥想 App');
    expect(zhTW[0]?.description).toContain('行動版原型');
    expect(zhTW[0]?.prompt).toContain('設計行動版原型');
  });
});
