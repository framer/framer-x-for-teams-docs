---
path: "/content/Checkbox/"
date: "2019-07-01"
title: "Checkbox"
tags: ["components"]
---

A Checkbox allows a user to toggle between two values: `on` and `off`.

### Minimum Requirements

The Checkbox component will be delivered as a code component and should at least have the following:

- Checked state
- Unchecked state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Checkbox(props) {
  return <Frame style={{}} />;
}

// Change the width and height here to fit your component
Card.defaultProps = {
  width: 200,
  height: 200
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A checkbox will normally have some sort of state (`on` or `off`). Try to use Framer's [useCycle](https://www.framer.com/api#cycle) or [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
- Check the [Learn Design System](https://framer-learn-docs.netlify.com/docs/Checkbox) for some already done examples.
- An example component to toggle the background might look something like this:

```tsx
import * as React from "react";
import { Frame, useCycle } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Checkbox(props) {
  const [active, inactive] = useCycle(
    { background: colors.primaryActive },
    { background: colors.backgroundGeneral }
  );

  return <Frame animate={active} onClick={inactive} />;
}
```

### Stretch Goals

After meeting the minimum requirements for the Checkbox component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`propertyControl`](https://www.framer.com/api/property-controls) to toggle the Checkbox from `true`/`false`.
- Add some text and a propertyControl to show/hide the text.
- Add an SVG that only displays when the box is checked. Use the built in Graphics tool!
- Animate the SVG as it appears.
- Add a Hover state.

For some inspiration, here are some checkbox examples:

- [Ant Design](https://ant.design/components/checkbox/)
- [CSS Checkboxes](https://freefrontend.com/css-checkboxes/)
- [Dribbble](https://dribbble.com/search?q=checkbox)
