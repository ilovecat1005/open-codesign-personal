# zh-TW Locale Implementation Checklist

- Add `zh-TW` to `@open-codesign/i18n`, including normalization aliases, locale JSON, synchronous translation helper, package export, and coverage tests.
- Register Traditional Chinese built-in demos and examples in `@open-codesign/templates`.
- Update renderer language controls, relative time formatting, polish prompt selection, and visible fallback messages.
- Update main-process menu/dialog/export/install/import visible strings to use locale-aware copy where practical.
- Add Traditional Chinese README and VitePress `/zh-tw/` docs matching current `/zh/` coverage.
- Add changeset and run targeted tests, website build, typecheck, and lint.
