---
path: "/content/Input/"
date: "2019-07-01"
title: "Input"
tags: ["components"]
---

An **Input** allows users to type input.

### Minimum Requirements

The Input component should at least have the following:

- Default Variant
- Destructive Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Input component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Shape: Round, Square
- Add the ability to change input type. I.e. numerical or password

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
import { colors } from "@framer/addison.loupe-colors/code/canvas";

export function Input(props) {
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
  // Defualt to render a Frame if the kind prop isn't set or available
  return <Frame />;
}

/**
 * Default props for our component.
 *
 * Change the height and width to match your different component size
 */
Input.defaultProps = {
  height: 200,
  width: 200,
  kind: "default"
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Input, {
  kind: {
    type: ControlType.Enum,
    options: ["default", "destructive"],
    optionTitles: ["Default", "Destructive"]
  }
});
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Since you'll be creating an Input, you'll need to add the `<input />` tag
