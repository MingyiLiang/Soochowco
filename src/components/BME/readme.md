# BEM

## Background

- http://getbem.com/naming/
- https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/

## Our Use

### block

id which is the kebab-case of the class/component

### element

id prefixed with block name, a child element within the root block

### modifier

class(className) which alters the original base style of the block or element

### global modifier

globally available class(className) which alters the original base style of the block or element

## Example

link: `src/components/RouteTo/route-to.tsx`
component: RouteTo

**what**: A component that makes it clear that upon clicking it will route you to another location via a hint(1).

hint(1): Visible indication of what's intented by the user interaction.

```yaml
 block:
    selector: #route-to
  elements:
    hint:
      selector: #route-to__hint

   modifiers:
    forward:
      selector: #route-to__hint.forward
    backward:
      className: #route-to__hint.backward

```
