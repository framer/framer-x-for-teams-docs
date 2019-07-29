---
path: "/content/List/"
date: "2019-07-01"
title: "List"
tags: ["components"]
---

A **List** is a component to organize text items.

### Minimum Requirements

The List component should at least have the following:

- Default Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the List component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Array`](https://www.framer.com/api/property-controls/#array) to add items from the property panel.

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

export function List(props) {
  return (
    <Frame
      style={
        {
          // Primary styles go here
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
List.defaultProps = {
  height: 200,
  width: 200
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(List, {});
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A list component might contain links, so a good idea for interaction might be a hover state per list item.
