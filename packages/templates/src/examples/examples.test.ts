import { describe, expect, it } from 'vitest';
import { EXAMPLES, getExample, getExamples } from './index';
import { enExamples } from './locales/en';
import { zhCNExamples } from './locales/zh-CN';
import { zhTWExamples } from './locales/zh-TW';

describe('examples gallery', () => {
  it('ships at least 6 curated examples', () => {
    expect(EXAMPLES.length).toBeGreaterThanOrEqual(6);
    expect(EXAMPLES.length).toBeLessThanOrEqual(30);
  });

  it('every example has a unique id', () => {
    const ids = EXAMPLES.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every example has a non-trivial prompt and inline SVG thumbnail', () => {
    for (const ex of EXAMPLES) {
      expect(ex.prompt.length).toBeGreaterThan(40);
      expect(ex.thumbnail).toMatch(/^<svg /);
    }
  });

  it('every example has en + zh-CN + zh-TW title/description coverage', () => {
    for (const ex of EXAMPLES) {
      const en = enExamples[ex.id];
      const zh = zhCNExamples[ex.id];
      const zhTW = zhTWExamples[ex.id];
      expect(en, `missing en content for ${ex.id}`).toBeDefined();
      expect(zh, `missing zh-CN content for ${ex.id}`).toBeDefined();
      expect(zhTW, `missing zh-TW content for ${ex.id}`).toBeDefined();
      expect(en?.title.length).toBeGreaterThan(0);
      expect(en?.description.length).toBeGreaterThan(0);
      expect(zh?.title.length).toBeGreaterThan(0);
      expect(zh?.description.length).toBeGreaterThan(0);
      expect(zhTW?.title.length).toBeGreaterThan(0);
      expect(zhTW?.description.length).toBeGreaterThan(0);
    }
  });

  it('getExamples returns localized content', () => {
    const en = getExamples('en');
    const zh = getExamples('zh-CN');
    const zhTW = getExamples('zh-TW');
    expect(en).toHaveLength(EXAMPLES.length);
    expect(zh).toHaveLength(EXAMPLES.length);
    expect(zhTW).toHaveLength(EXAMPLES.length);
    const cosmicEn = en.find((e) => e.id === 'cosmic-animation');
    const cosmicZh = zh.find((e) => e.id === 'cosmic-animation');
    const cosmicZhTW = zhTW.find((e) => e.id === 'cosmic-animation');
    expect(cosmicEn?.title).toBe('Cosmic scale animation');
    expect(cosmicZh?.title).toBe('宇宙尺度动画');
    expect(cosmicZhTW?.title).toBe('宇宙尺度動畫');
    // Prompt is locale-independent — same canonical English source.
    expect(cosmicEn?.prompt).toBe(cosmicZh?.prompt);
    expect(cosmicEn?.prompt).toBe(cosmicZhTW?.prompt);
  });

  it('getExamples falls back to en for unknown locales', () => {
    const fallback = getExamples('fr-FR');
    expect(fallback[0]?.title).toBe(getExamples('en')[0]?.title);
  });

  it('getExample looks up by id', () => {
    const ex = getExample('dashboard', 'en');
    expect(ex?.category).toBe('dashboard');
    expect(getExample('does-not-exist')).toBeUndefined();
  });

  it('getExamples throws when a locale entry is missing in every registry', () => {
    const id = EXAMPLES[0]?.id ?? 'cosmic-animation';
    const enBackup = enExamples[id];
    const zhBackup = zhCNExamples[id];
    const zhTWBackup = zhTWExamples[id];
    delete enExamples[id];
    delete zhCNExamples[id];
    delete zhTWExamples[id];
    try {
      expect(() => getExamples('zh-TW')).toThrow(/missing localized content/);
    } finally {
      if (enBackup) enExamples[id] = enBackup;
      if (zhBackup) zhCNExamples[id] = zhBackup;
      if (zhTWBackup) zhTWExamples[id] = zhTWBackup;
    }
  });
});
