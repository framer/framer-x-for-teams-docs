---
path: "/content/Slider/"
date: "2019-07-01"
title: "Slider"
tags: ["components"]
---

A **Slider** allows a user to choose a number between a minimum and maximum value.

## Design

### Minimum Requirements

The Slider component will be delivered as a code component and should at least have the following:

- Default state
- Draggable state
- Recommended size: 260px x 44px

  For some inspiration, here are some slider examples:

  - [Dribbble](https://dribbble.com/search/shots/popular/animation?q=slider)
  - [Ant Design](https://ant.design/components/slider/)

## Code

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Slider(props) {
  return <Frame style={{}} center />;
}

// Change the width and height here to fit your component
Slider.defaultProps = {
  width: 260,
  height: 44
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Since sliders slide, you'll need to add some drag functionality. Luckily the Framer API has a [built in drag](https://www.framer.com/api/frame/#drag) functionality!
- Check out the [Learn Design System](https://store.framer.com/package/steveruizok/education) if you want to see an already working example.

### Stretch Goals

After meeting the minimum requirements for the Slider component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Try to hook the slider up to control something on the canvas. Exploring the [api docs](https://www.framer.com/api/tutorial/) might help!
