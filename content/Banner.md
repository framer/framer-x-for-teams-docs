---
path: "/content/Banner/"
date: "2019-07-01"
title: "Banner"
tags: ["components"]
---

A **Banner** is a section of an app used to give users information

### Minimum Requirements

The Banner component should at least have the following:

- Default Variant
- Destructive Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Banner component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add a third variant
- Sizes: Small, Medium, Large
- Shape: Round, Square
- Animate the banner in/out of the screen

### Starting Template

```tsx
import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

/**
 * This import will allow Overrides made in another file available to use in our component
 *
 * Change the override names and file name if yours is different
 */
// import { Default, Destructive } from "./Examples";

/**
 * This import allows us to use colors from the Loupe Store Package
 *
 * You can use a color by referencing it like: colors.primary
 */
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Banner(props) {
  if (props.kind == "default") {
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
  if (props.kind == "destructive") {
    return (
      <Frame
        style={
          {
            // Destructive styles go here
          }
        }
        //Atach an imported Overrides to your component
        // {...Destructive()}
        size={"100%"}
      />
    );
  }
  // Fallback to render a Frame if the kind prop isn't set or available
  return <Frame />;
}

/**
 * Default props for our component.
 *
 * Change the height and width to match your different component size
 */
Banner.defaultProps = {
  height: 200,
  width: 200,
  kind: "default"
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Banner, {
  kind: {
    type: ControlType.Enum,
    options: ["default", "destructive"],
    optionTitles: ["Default", "Destructive"]
  }
});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A banner will most likely contain some text. See if you can add [`ControlType.String`](https://www.framer.com/api/property-controls/#string) to control the text!
