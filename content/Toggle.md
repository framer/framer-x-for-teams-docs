---
path: "/content/Toggle/"
date: "2019-07-01"
title: "Toggle"
tags: ["components"]
---

A Toggle allows a user to toggle between two values: `on` and `off`.

## Design

### Minimum Requirements

The Toggle component will be delivered as a code component and should at least have the following:

- On state
- Off state
- Recommended size: 260px x 44px

For some inspiration, here are some toggle examples:

- [Ant Design](https://ant.design/components/toggle/)
- [Dribbble](https://dribbble.com/tags/toggle)

## Code

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Toggle(props) {
  return <Frame style={{}} center />;
}

// Change the width and height here to fit your component
Toggle.defaultProps = {
  width: 260,
  height: 44
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A radio will normally have some sort of state (`on` or `off`). Try to use Framer's [useCycle](https://www.framer.com/api#cycle) or [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
- Check the [Learn Design System](https://framer-learn-docs.netlify.com/docs/Switch) for some already done examples.
- An example component to toggle the background might look something like this:

```tsx
import * as React from "react";
import { Frame, useCycle } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Toggle(props) {
  const [active, inactive] = useCycle({ x: 5 }, { x: 255 });

  return (
    <Frame onClick={inactive}>
      <Frame animate={active} />
    </Frame>
  );
}
```

### Stretch Goals

After meeting the minimum requirements for the Toggle component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`propertyControl`](https://www.framer.com/api/property-controls) to toggle the Toggle from `true`/`false`.
- Add some text and a propertyControl to show/hide the text.
- Add a Hover state
- Make the toggle control something else on the canvas!
