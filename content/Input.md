---
path: "/content/Input/"
date: "2019-07-01"
title: "Input"
tags: ["components"]
---

An **Input** allows users to type input.

### Minimum Requirements

The Input component should at least have the following:

- Default state

### Starting Template

```tsx
import * as React from "react";
import { Frame } from "framer";
//@ts-ignore
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Input(props) {
  return <Frame style={{}} />;
}
```

### Tips

Framer has a nice API to help add things like animations, state, and variants. Here are some tips that might help when creating your component:

- Since you'll be creating an Input, you'll need to add the `<input />` tag

### Stretch Goals

After meeting the minimum requirements for the Input component, you might have some extra time to add some extra functionality.

Here are some stretch goals:

- Shape: Round, Square
- Add the ability to change input type. I.e. numerical or password
