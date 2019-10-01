---
path: "/content/Colors/"
date: "2019-07-01"
title: "Colors"
tags: ["components"]
---

The [Loupe Colors](https://store.framer.com/package/tishogeorgiev/framer-x-for-teams-colors) package includes a set of Shared Colors.

<h4>Primary Colors</h4>

<p>
The primary color is the color displayed most frequently across your
app’s screens and components. It for has an active variant which is used
for hovers, active states or accents.
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "white",
    background: "#0055ff"
  }}
>
  <code>primary</code> #0055FF
</p>
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#98E7FF"
  }}
>
  <code>primaryActive</code> #98E7FF
</p>
</p>

<h4>Secondary Colors</h4>

<p>
The secondary color provides more ways to accent and distinguish your
product. It has an active variant which is used for hovers, active
states or accents.{" "}
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#FF7744"
  }}
>
  <code>secondary</code> #FF7744
</p>
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#FFC6A8"
  }}
>
  <code>secondaryActive</code> #FFC6A8
</p>
</p>

<h4>Destructive Colors</h4>

<p>
The destructive color indicates errors in components, such as invalid
text in a text field or actions that might cause a big change.
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "white",
    background: "#A61A14"
  }}
>
  <code>destructive</code> #A61A14
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#D4504C"
  }}
>
  <code>destructiveActive</code> #D4504C
</p>
</p>

<h4 id="disabled">Disabled</h4>

<p>The disabled color indicates disabled states. </p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#C9C7C5"
  }}
>
  <code>disabled</code> #C9C7C5
</p>
</p>

<h4>Background / Surface Colors</h4>

<p>
Background colors affect surfaces of components, such as cards, sheets,
and menus. They can also appear behind content (e.g. behind scrollable
content)
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#E7FFF7"
  }}
>
  <code>backgroundPrimary</code> #E7FFF7
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#FFF9DA"
  }}
>
  <code>backgroundSecondary</code> #FFF9DA
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#F3F2F2"
  }}
>
  <code>backgroundGeneral</code> #F3F2F2
</p>
</p>

<h4>"On" Colors</h4>

<p>
“On” colors are primarily applied to text, iconography, and strokes and
are used on top of other colors.
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "white",
    background: "#000000"
  }}
>
  <code>onLight</code> #000000
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#8A8A8A"
  }}
>
  <code>gray1</code> #8A8A8A
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#BBBBBB"
  }}
>
  <code>gray2</code> #BBBBBB
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#F3F2F2"
  }}
>
  <code>gray3</code> #F3F2F2
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#FFFFFF"
  }}
>
  <code>onDark</code> #FFFFFF
</p>
</p>

<h4>Alternative Colors</h4>

<p>
Alternative colors can be used to establish themes that distinguish
different sections.
</p>

<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#FF0055"
  }}
>
  <code>alternative1</code> #FF0055
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#AA00FF"
  }}
>
  <code>alternative2</code> #AA00FF
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "black",
    background: "#00D5FF"
  }}
>
  <code>alternative3</code> #00D5FF
</p>
</p>
<p>
<p
  style={{
    paddingLeft: 10,
    marginBottom: 0,
    color: "white",
    background: "#2B00FF"
  }}
>
  <code>alternative4</code> #2B00FF
</p>
</p>

## Canvas

On the Framer X canvas, you can select from these colors in the color selector
under the Shared Colors dropdown (Under Loupe Colors).

## Code

In your component code or overrides, you can access the package's colors by
importing them as shown below.

```tsx
// Code Component
import * as React from "react";
import { Frame } from "framer";
import { colors } from "@framer/tishogeorgiev.framer-x-for-teams-colors/code/canvas";

export function Component() {
  return <Frame background={colors.backgroundPrimary} />;
}
```

```tsx
// Overrides
import { Override } from "framer"
import { colors } from '@framer/tishogeorgiev.framer-x-for-teams-colors/code/canvas'

export function ColorExample: Override {
  return {
    background: colors.backgroundPrimary,
    border: `1px solid ${colors.onDark}`
  }
}
```
