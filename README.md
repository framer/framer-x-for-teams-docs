# Framer Design System

<img src="./static/favicon/favicon.png" alt="drawing" width="100"/>

Here at Framer, we're aiming to fully bridge the gap between designers and developers, through collaboration and shared design systems.

Today, we'll be exploring new ways teams can collaborate in Framer X, while learning how to build components using Framer's API.

Please view the [Official Docs](https://framerx-for-teams-workshop.netlify.com/) for more information about the workshop.

# Overview

We have some already defined colors ready to be used, which you can use in the canvas or as variables in your code.

#### Primary Color

The primary color is the color displayed most frequently across your app’s screens and components. It for has an active variant which is used for hovers, active states or accents.

![#0055FF](https://placehold.it/15/0055FF/000000?text=+) #0055FF - `primary`

![#98E7FF](https://placehold.it/15/98E7FF/000000?text=+) #98E7FF- `primaryActive`

---

#### Secondary Color

The secondary color provides more ways to accent and distinguish your product. It has an active variant which is used for hovers, active states or accents.

![#FF7744](https://placehold.it/15/FF7744/000000?text=+) #FF7744- `secondary`

![#FFC6A8](https://placehold.it/15/FFC6A8/000000?text=+) #FFC6A8 - `secondaryActive`

---

#### Destructive color

The destructive color indicates errors in components, such as invalid text in a text field or actions that might cause a big change.

![#A61A14](https://placehold.it/15/A61A14/000000?text=+) #A61A14 - `destructive`

![#D4504C](https://placehold.it/15/D4504C/000000?text=+) #D4504C - `destructiveActive`

---

#### Disabled

The disabled color indicates disabled states.

![#C9C7C5](https://placehold.it/15/C9C7C5/000000?text=+) #C9C7C5 - `disabled`

---

#### Background / Surface Colors

Background colors affect surfaces of components, such as cards, sheets, and menus. They can also appear behind content (.e.g behind scrollable content)

![#E7FFF7](https://placehold.it/15/E7FFF7/000000?text=+) #E7FFF7- `backgroundPrimary`

![#FFF9DA](https://placehold.it/15/FFF9DA/000000?text=+) #FFF9DA - `backgroundSecondary`

![#F3F2F2](https://placehold.it/15/F3F2F2/000000?text=+) #F3F2F2 - `backgroundGeneral`

---

#### "On" Colors

“On” colors are primarily applied to text, iconography, and strokes and are used on top of other colors.

![#000000](https://placehold.it/15/000000/000000?text=+) #000000 - `onLight`

![#8A8A8A](https://placehold.it/15/8A8A8A/000000?text=+) #8A8A8A - `gray1`

![#BBBBBB](https://placehold.it/15/BBBBBB/000000?text=+) #BBBBBB - `gray2`

![#F3F2F2](https://placehold.it/15/F3F2F2/000000?text=+) #F3F2F2 - `gray3`

![#FFFFFF](https://placehold.it/15/FFFFFF/000000?text=+) #FFFFFF - `onDark`

---

#### Alternative colours

Alternative colors can be used to establish themes that distinguish different sections.

![#FF0055](https://placehold.it/15/FF0055/000000?text=+) #FF0055- `alternative1`

![#AA00FF](https://placehold.it/15/AA00FF/000000?text=+) #AA00FF - `alternative2`

![#00D5FF](https://placehold.it/15/00D5FF/000000?text=+) #00D5FF - `alternative3`

![#2B00FF](https://placehold.it/15/2B00FF/000000?text=+) #2B00FF - `alternative4`

# Using Shared Colors in Framer X

### Framer X Canvas

Watch a quick 5 min video here or check out the [documentation](https://www.framer.com/support/using-framer-x/shared-colors/).

### Code Overrides

```
import  { Override }  from  "framer"

import  { colors }  from  "@framer/tishogeorgiev.framer-workshop-colors/code/canvas"

export  function  Primary():  Override  {
    return  {
        whileHover:  { background:  colors.primaryActive  },
    }
}
```

### Code Component

```
import  { Frame }  from  "framer"

import  { colors }  from  "@framer/tishogeorgiev.framer-workshop-colors/code/canvas"

export function Component() {
    return <Frame background={colors.backgroundPrimary}/>
}
```
