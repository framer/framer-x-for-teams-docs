---
path: "/content/Checkbox/"
date: "2019-07-01"
title: "Checkbox"
tags: ["components"]
---

A Checkbox allows a user to toggle between two values: `on` and `off`.

### Minimum Requirements

The Checkbox component should at least have the following:

- Default Variant
- Interaction State (Click)

### Stretch Goals

After meeting the minimum requirements for the Checkbox component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add an SVG that only displays when the box is checked. Use the built in Graphics tool!
- Add [`propertyControl`](https://www.framer.com/api/property-controls) to toggle the Checkbox from `true`/`false`
- Add a Hover state

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

export function Checkbox(props) {
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
Checkbox.defaultProps = {
  height: 200,
  width: 200,
  kind: "primary"
};

/**
 * Adding propertyControls to control the component kind
 */
addPropertyControls(Checkbox, {
  kind: {
    type: ControlType.Enum,
    options: ["primary", "secondary", "destructive"],
    optionTitles: ["Primary", "Secondary", "Destructive"]
  }
});
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A toggle will normally have some sort of state (`on` or `off`). Try to use Framer's [useCylce](https://www.framer.com/api#cycle) or [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
- An example override to toggle the background might look something like this:

```tsx
// import everything necessary: Overrides, useCycle hook and colors.
import { Override, useCycle } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Checkbox(): Override {
  const [active, inactive] = useCycle(
    { background: colors.primaryActive },
    { background: colors.backgroundGeneral }
  );

  return {
    animate: active,
    onTap() {
      inactive();
    }
  };
}
```
