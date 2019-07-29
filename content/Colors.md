---
path: "/content/Colors/"
date: "2019-07-01"
title: "Colors"
tags: ["components"]
---

The [Loupe Colors](https://store.framer.com/package/aroagb/loupe-colors) package includes a set of Shared Colors. Visit the homepage to get a more detailed description of how and when to use each color.

| Color                 | Code      |
| :-------------------- | :-------- |
| `primary`             | `#0055FF` |
| `primaryActive`       | `#98E7FF` |
| `secondary`           | `#FF7744` |
| `secondaryActive`     | `#FFC6A8` |
| `destructive`         | `#A61A14` |
| `destructiveActive`   | `#D4504C` |
| `disabled`            | `#C9C7C5` |
| `backgroundPrimary`   | `#E7FFF7` |
| `backgroundSecondary` | `#FFF9DA` |
| `backgroundGeneral`   | `#F3F2F2` |
| `onLight`             | `#000000` |
| `gray1`               | `#8A8A8A` |
| `gray2`               | `#BBBBBB` |
| `gray3`               | `#F3F2F2` |
| `onDark`              | `#FFFFFF` |
| `alternative1`        | `#FF0055` |
| `alternative2`        | `#AA00FF` |
| `alternative3`        | `#00D5FF` |
| `alternative4`        | `#2B00FF` |

## Canvas

On the Framer X canvas, you can select from these colors in the color selector
under the Shared Colors dropdown (Under Loupe Colors).

## Code

In your component code or overrides, you can access the package's colors by
importing them as shown below.

```tsx
// Overrides
import { Override } from "framer"
import { colors } from '@framer/aroagb.loupe-colors/code/canvas'

export function ColorExample: Override {
  return {
    background: colors.backgroundPrimary,
    border: `1px solid ${colors.onDark}`
  }
}
```

```tsx
// Code Component
import { Override } from "framer";
import { colors } from "@framer/aroagb.loupe-colors/code/canvas";

export function Component() {
  return <Frame background={colors.backgroundPrimary} />;
}
```
