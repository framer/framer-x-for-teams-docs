---
path: "/content/Hero/"
date: "2019-07-01"
title: "Hero"
tags: ["components"]
---

A **Hero** gives an image for your website or app

### Minimum Requirements

The Hero component should at least have the following:

- Default state
- Hover state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Hero(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Hero components come in a number of sizes, and normally are the first to appear on a website or app.

### Stretch Goals

After meeting the minimum requirements for the Banner component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add more variants
- Sizes: Small, Medium, Large
- Shape: Round, Square
