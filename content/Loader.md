---
path: "/content/Loader/"
date: "2019-07-01"
title: "Loader"
tags: ["components"]
---

A **Loader** is a component to communicate a loading state.

### Minimum Requirements

The Loader component should at least have the following:

- Default state
- Looped animation

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Loader(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Loaders can look many different ways, like a circle or a progress bar.
- A progress bar that animates it's width might be a good place to start.
