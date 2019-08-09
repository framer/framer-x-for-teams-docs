---
path: "/content/Banner/"
date: "2019-07-01"
title: "Banner"
tags: ["components"]
---

A **Banner** is a section of an app used to give users information

### Minimum Requirements

The Banner component should at least have the following:

- Default state
- Hover state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Banner(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A banner will most likely contain some text. See if you can add [`ControlType.String`](https://www.framer.com/api/property-controls/#string) to control the text!

### Stretch Goals

After meeting the minimum requirements for the Banner component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add more variants
- Sizes: Small, Medium, Large
- Shape: Round, Square
- Animate the banner in/out of the screen
