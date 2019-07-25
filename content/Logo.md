---
path: "/content/Logo/"
date: "2019-07-01"
title: "Logo"
tags: ["components"]
---

A **Logo** is a component to communicate a your brand's visual identity.

### Minimum Requirements

The Logo component should at least have the following:

- Light Variant
- Dark Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Logo component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`ControlType.Color`](https://www.framer.com/api/property-controls/#color) to change the color of your logo.
- Add multiple sizes, like Small, Medium, and Large.

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

export function Logo(props) {
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
Logo.defaultProps = {
  height: 200,
  width: 200,
  kind: "primary"
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Logo, {
  kind: {
    type: ControlType.Enum,
    options: ["primary", "secondary", "destructive"],
    optionTitles: ["Primary", "Secondary", "Destructive"]
  }
});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Using the [Graphics tool](https://www.framer.com/support/using-framer-x/drawing-tools/) in Framer X, you can get your svg quickly by right clicking the graphic and slecting copy > copy SVG.
- If you're getting an error, make sure your SVG is [valid JSX](https://svg2jsx.com/).
- It could be cool to do some awesome animations while hovering the logo, don't be afraid to use your creativity!
