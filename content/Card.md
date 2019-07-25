---
path: "/content/Card/"
date: "2019-07-01"
title: "Card"
tags: ["components"]
---

A **Card** is a structured container for content and actions about a single subject.

Optionally, the card can have a set structure (title, subtitle, description, actions, media, etc.)

### Minimum Requirements

The Card component should at least have the following:

- Default Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Card component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add variants: Secondary, Danger
- Shape: Round, Square
- Sizes: Large, Medium, Small
- Add Media
- Add randomized media: coming from an API.

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

export function Card(props) {
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
Card.defaultProps = {
  height: 200,
  width: 200
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Card, {});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Cards can come in many different shapes and sizes. Use your imagination!
- A card will most likely contain some text. See if you can add [`ControlType.String`](https://www.framer.com/api/property-controls/#string) to control the text!
