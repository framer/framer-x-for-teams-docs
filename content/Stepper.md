---
path: "/content/Stepper/"
date: "2019-07-01"
title: "Stepper"
tags: ["components"]
---

A **Stepper** allows a user to choose a number between a minimum and maximum value.
It may be "stepped", so that its value only changes in increments of a given
number.

### Minimum Requirements

The Stepper component should at least have the following:

- Default state
- Click state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Stepper(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Steppers noramlly have some sort of state to hold the number. Try to use [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!
- An example component to hold component state might look something like this:

```tsx
import * as React from "react";
import { Frame, useCycle } from "framer";

export function Stepper(props) {
  const [number, setNumber] = React.useState(0);

  return <Frame onClick={setNumber}>{number}</Frame>;
}
```

### Stretch Goals

After meeting the minimum requirements for the Stepper component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add [`propertyControl`](https://www.framer.com/api/property-controls) to set a min and a max for the Stepper.
