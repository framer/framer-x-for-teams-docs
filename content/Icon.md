---
path: "/content/Icon/"
date: "2019-07-01"
title: "Icon"
tags: ["components"]
---

An **Icon** gives an image for your app.

### Minimum Requirements

The Icon component should at least have the following:

- Default Variant
- 5 different Icons to display

### Stretch Goals

After meeting the minimum requirements for the Icon component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Other icons: go wild and use your imagination!
- Sizes: Large, Medium, Small

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

export function Icon(props) {
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
Icon.defaultProps = {
  height: 50,
  width: 50
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Icon, {});
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Use the built in Graphics tool to draw out some cool icons!
