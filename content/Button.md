---
path: "/content/button/"
date: "2019-07-01"
title: "Button"
tags: ["components"]
---

**Buttons** allow users to take actions, and make choices, with a single tap. It can have other interactions, such as hovers and it can contain text.

### Minimum Requirements

The Button component should at least have the following:

- Primary Variant
- Secondary Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Button component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add variants: Disabled, Destructive, etc.
- Shape: Round, Square
- Sizes: Large, Medium, Small
- Ghost Button
- Different interactions: E.g. Coming from the bottom
- Make it interact with something in the canvas: E.g. If an input field is empty, my button is disabled.

### Starting Template

```tsx
import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

/**
 * This import will allow Overrides made in another file available to use in our component
 *
 * Change the override names and file name if yours is different
 */
// import { Primary, Secondary, Destructive } from "./Examples";

/**
 * This import allows us to use colors from the Loupe Store Package
 *
 * You can use a color by referencing it like: colors.primary
 */
//@ts-ignore
import { colors } from "@framer/addison.loupe-colors/code/canvas";

export function Button(props) {
  if (props.kind == "primary") {
    return (
      <Frame
        style={
          {
            // Primary styles go here
          }
        }
        //Atach an imported Overrides to your component
        // {...Primary()}
        size={"100%"}
      />
    );
  }
  // If you don't have a secondary style, you won't need more if statement blocks
  if (props.kind == "secondary") {
    return (
      <Frame
        style={
          {
            // Secondary styles go here
          }
        }
        //Atach an imported Overrides to your component
        // {...Secondary()}
        size={"100%"}
      />
    );
  }
  // Defualt to render a Frame if the kind prop isn't set or available
  return <Frame />;
}

/**
 * Default props for our component.
 *
 * Change the height and width to match your different component size
 */
Button.defaultProps = {
  height: 200,
  width: 200,
  kind: "primary"
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Button, {
  kind: {
    type: ControlType.Enum,
    options: ["primary", "secondary", "destructive"],
    optionTitles: ["Primary", "Secondary", "Destructive"]
  }
});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Buttons will normally have hover and click states. Use your imagination and the Framer API to experiment with some new ideas!
