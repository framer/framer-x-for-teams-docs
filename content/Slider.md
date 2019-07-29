---
path: "/content/Slider/"
date: "2019-07-01"
title: "Slider"
tags: ["components"]
---

A **Slider** allows a user to choose a number between a minimum and maximum value.
It may display titles for these values, and may be "stepped", so that its value
only changes in increments of a given number.

### Minimum Requirements

The Slider component should at least have the following:

- Default Variant
- Interaction State (Drag)

### Stretch Goals

After meeting the minimum requirements for the Slider component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Try to hook the slider up to control something on the canvas. Exploring the [api docs](https://www.framer.com/api/tutorial/) might help!

### Starting Template

```tsx
import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

/**
 * This import will allow Overrides made in another file available to use in our component
 *
 * Change the override names and file name if yours is different
 */
// import { Default } from "./Examples";

/**
 * This import allows us to use colors from the Loupe Store Package
 *
 * You can use a color by referencing it like: colors.primary
 */
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Slider(props) {
  return (
    <Frame
      style={
        {
          // Default styles go here
        }
      }
      //Atach an imported Overrides to your component
      // {...Default()}
      size={"100%"}
    />
  );
}

/**
 * Default props for our component.
 *
 * Change the height and width to match your different component size
 */
Slider.defaultProps = {
  height: 200,
  width: 200
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Slider, {});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Since sliders slide, you'll need to add some drag functionality. Luckily the Framer API has a [built in drag](https://www.framer.com/api/frame/#drag) functionality!
