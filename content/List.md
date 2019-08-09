---
path: "/content/List/"
date: "2019-07-01"
title: "List"
tags: ["components"]
---

A **List** is a component to organize text items.

### Minimum Requirements

The List component should at least have the following:

- Default state
- Hover state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function List(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A list component might contain links, so a good idea for interaction might be a hover state per list item.

### Stretch Goals

After meeting the minimum requirements for the List component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Array`](https://www.framer.com/api/property-controls/#array) to add items from the property panel.
