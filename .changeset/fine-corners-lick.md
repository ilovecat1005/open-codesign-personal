---
'@open-codesign/core': patch
---

fix(core): strip orphan markdown fences from chat message text

When the model wraps an `<artifact>` tag in a markdown fence (` ```html ... ``` `), the streaming parser consumes the artifact body via structured events but the surrounding fence wrappers come through as text deltas. This left an empty ` ```html\n``` ` shell in the chat bubble. Drop those leftover wrappers before returning the message.
