---
path: "/content/Radio/"
date: "2019-07-01"
title: "Radio"
tags: ["components"]
---

Tapping on a **Radio** will turn it on. Radio inputs are normally used as a
group in order to capture a mutually-exclusive choice.

### Minimum Requirements

The Radio component should at least have the following:

- Default Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Radio component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add a message that will pop up when toggling the radio to `on` / `true`.

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
import { colors } from "@framer/addison.loupe-colors/code/canvas";

export function Radio(props) {
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
Radio.defaultProps = {
  height: 200,
  width: 200
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Radio, {});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Radio buttons normally have some sort of state (`true` or `false`). Try to use [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
