---
path: "/content/Segment/"
date: "2019-07-01"
title: "Segment"
tags: ["components"]
---

A **Segment** is a group of options, presented as buttons. Only one option may
be selected at once.

### Minimum Requirements

The Segment component should at least have the following:

- Default state
- Click state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Segment(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Segments noramlly have some sort of state to hold the seleted item for each section. Try to use [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!

### Stretch Goals

After meeting the minimum requirements for the Segment component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Array`](https://www.framer.com/api/property-controls/#array) to add more segments from the property panel.
- Hook the Segment up to something else on the canvas!
