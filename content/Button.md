---
path: "/content/button/"
date: "2019-07-01"
title: "Button"
tags: ["components"]
---

**Buttons** allow users to take actions, and make choices, with a single tap. It can have other interactions, such as hovers and it can contain text.

## Design

### Minimum Requirements

The Button component should at least have the following:

- Default state
- Hover state
- Click state
- Recommended size: 165px x 45px

## Code

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/tishogeorgiev.framer-workshop-colors/code/canvas";

export function Button(props) {
  return <Frame style={{}} center />;
}

// Change the width and height here to fit your component
Button.defaultProps = {
  width: 165,
  height: 45
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Buttons will normally have hover and click states. Use your imagination and the Framer API to experiment with some new ideas!

### Stretch Goals

After meeting the minimum requirements for the Button component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Create variants (Primary, Secondary, Destructive) and interactive states for them (tap, hover)
- Add [propertyControls](https://framer.com/api/property-controls)
- Make it interact with something in the canvas: E.g. If an input field is empty, my button is disabled.
- Shape: Round, Square
- Sizes: Large, Medium, Small
- Ghost Button
- Different interactions: E.g. Coming from the bottom
