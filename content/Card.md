---
path: "/content/Card/"
date: "2019-07-01"
title: "Card"
tags: ["components"]
---

A **Card** is a structured container for content and actions about a single subject.

## Design

### Minimum Requirements

The Card component will be delivered as a code component and should at least have the following:

- Closed state (Recommended size: 1000px x 150px)
- Open state (Recommended size: 1000px x 400px)

For some inspiration, here are some card examples:

- [Ant Design](https://ant.design/components/card/)
- [Dribbble](https://dribbble.com/search/shots/popular?q=cards)

## Code

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Card(props) {
  return <Frame style={{}} center />;
}

// Change the width and height here to fit your component
Card.defaultProps = {
  width: 1000,
  height: 150
};
```

### Tips

Framer has a nice [API](https://www.framer.com/api/) to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Cards can come in many different shapes and sizes. Use your imagination!
- Check the [Learn Design System](https://framer-learn-docs.netlify.com/docs/Card) for some already done examples.
- A card will most likely contain some text. See if you can add [`ControlType.String`](https://www.framer.com/api/property-controls/#string) to control the text!
- A card will normally have some sort of state (`open` or `closed`). Try to use Framer's [useCycle](https://www.framer.com/api#cycle) or [React.useState](https://reactjs.org/docs/hooks-state.html) to hold your component state!

```tsx
import * as React from "react";
import { Frame, useCycle } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Card(props) {
  const [active, inactive] = useCycle({ height: 50 }, { height: 100 });

  return <Frame animate={active} onClick={inactive} />;
}
```

### Stretch Goals

After meeting the minimum requirements for the Card component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Add variants: Secondary, Danger
- Shape: Round, Square
- Sizes: Large, Medium, Small
- Add Media
- Add randomized media: coming from an API.
