---
path: "/content/Navigation/"
date: "2019-07-01"
title: "Navigation"
tags: ["components"]
---

A **Navigation** is a component that allows you to travel through your app or website.

### Minimum Requirements

The Navigation component should at least have the following:

- Default state
- Hover state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Navigation(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A navigation component usually contains links, so a good idea for interaction might be a hover state per list item.
- Navigation components can come both vertical and horizontal. Try to stick with one to start, and add the other if time allows!

### Stretch Goals

After meeting the minimum requirements for the Navigation component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Array`](https://www.framer.com/api/property-controls/#array) to add items from the property panel.
