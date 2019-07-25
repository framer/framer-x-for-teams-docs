---
path: "/content/Avatar/"
date: "2019-07-01"
title: "Avatar"
tags: ["components"]
---

Avatars can be used to represent people or objects.

### Minimum Requirements

The Avatar component should at least have the following:

- Default Variant
- Interaction State (Hover or Click)

### Stretch Goals

After meeting the minimum requirements for the Avatar component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Shape: Round, Square
- Sizes: Large, Medium, Small
- Badge: Active, Inactive
- Add random images coming from an API (https://tinyfac.es/)

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

export function Avatar(props) {
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
}

/**
 * Default props for our component.
 *
 * Change the height and width to match your different component size
 */
Avatar.defaultProps = {
  height: 200,
  width: 200
};

/**
 * Adding propertyControls here
 */
addPropertyControls(Avatar, {});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Avatars normally have images. Using [`ControlType.File`](https://www.framer.com/api/property-controls/#file) might be a good idea to change the image in and out!
