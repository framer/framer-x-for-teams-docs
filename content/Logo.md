---
path: "/content/Logo/"
date: "2019-07-01"
title: "Logo"
tags: ["components"]
---

A **Logo** is a component to communicate a your brand's visual identity.

### Minimum Requirements

The Logo component should at least have the following:

- Default state
- Hover state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Logo(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Using the [Graphics tool](https://www.framer.com/support/using-framer-x/drawing-tools/) in Framer X, you can get your svg quickly by right clicking the graphic and slecting copy > copy SVG.
- If you're getting an error, make sure your SVG is [valid JSX](https://svg2jsx.com/).
- It could be cool to do some awesome animations while hovering the logo, don't be afraid to use your creativity!

### Stretch Goals

After meeting the minimum requirements for the Logo component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Color`](https://www.framer.com/api/property-controls/#color) to change the color of your logo.
- Add multiple sizes, like Small, Medium, and Large.
