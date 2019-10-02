---
path: "/content/Logo/"
date: "2019-07-01"
title: "Logo"
tags: ["components"]
---

A **Logo** is a component to communicate a your brand's visual identity.

## Design

### Minimum Requirements

The Logo component will be delivered as a design component and should at least have the following:

- Large (width: 190px x height: 190px)
- Medium (width: 74px x height: 74px)
- Small (width: 28px x height: 28px)
- Dark Mode
- Light Mode

### Tips

- Using the [Graphics tool](https://www.framer.com/support/using-framer-x/drawing-tools/) in Framer X, you can get your svg quickly by right clicking the graphic and slecting copy > copy SVG.
- [Graphic Tool - Framer Crash Course](https://www.youtube.com/watch?v=oALrdQHhHMI)

## Code (Optional)

If you'd like to code, you can right click on your Graphic to copy the SVG, and use this template to get started:

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/tishogeorgiev.framer-workshop-colors/code/canvas";

export function Logo(props) {
  return (
    <Frame background={""} center>
      // SVG code goes here
    </Frame>
  );
}

// Change the width and height here to fit your logo
Logo.defaultProps = {
  width: 190,
  height: 190
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- If you're getting an error, make sure your SVG is [valid JSX](https://svg2jsx.com/).
- It could be cool to do some awesome animations while hovering the logo, don't be afraid to use your creativity!

### Stretch Goals

After meeting the minimum requirements for the Logo component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Color`](https://www.framer.com/api/property-controls/#color) to change the color of your logo.
- Add multiple sizes, like Small, Medium, and Large.
