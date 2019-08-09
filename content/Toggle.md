---
path: "/content/Toggle/"
date: "2019-07-01"
title: "Toggle"
tags: ["components"]
---

A Toggle allows a user to toggle between two values: `on` and `off`.

### Minimum Requirements

The Toggle component should at least have the following:

- On state
- Off state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Toggle(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- A radio will normally have some sort of state (`on` or `off`). Try to use Framer's [useCylce](https://www.framer.com/api#cycle) or [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
- An example component to toggle the background might look something like this:

```tsx
import { Frame, useCycle } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Toggle(props) {
  const [active, inactive] = useCycle(
    { background: colors.primaryActive },
    { background: colors.backgroundGeneral }
  );

  return <Frame style={active} onClick={inactive} />;
}
```

### Stretch Goals

After meeting the minimum requirements for the Toggle component, you might have some extra time to add some extra functionality. For some inspiration, you can find some toggle examples [here](https://ant.design/components/toggle/)

Here are some stretch goals:

- Add [`propertyControl`](https://www.framer.com/api/property-controls) to toggle the Toggle from `true`/`false`.
- Add some text and a propertyControl to show/hide the text.
- Add a Hover state
- Make the toggle control something else on the canvas!
