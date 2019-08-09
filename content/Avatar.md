---
path: "/content/Avatar/"
date: "2019-07-01"
title: "Avatar"
tags: ["components"]
---

Avatars can be used to represent people or objects.

### Minimum Requirements

The Avatar component should at least have the following:

- Default state
- Interaction state (Hover)

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Avatar(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Avatars normally have images. Using [`ControlType.File`](https://www.framer.com/api/property-controls/#file) might be a good idea to change the image in and out!

### Stretch Goals

After meeting the minimum requirements for the Avatar component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Shape: Round, Square
- Sizes: Large, Medium, Small
- Badge: Active, Inactive
- Add random images coming from an API (https://tinyfac.es/)
