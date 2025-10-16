---
title: Markdown Examples
---

# Markdown Syntax Guide

This page provides a comprehensive overview of Markdown syntax.

## Headers

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

```markdown
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

## Links

```markdown
[VitePress](https://vitepress.dev/)
```

[VitePress](https://vitepress.dev/)

## Images

```markdown
![Vite Logo](https://vitepress.dev/vitepress-logo-mini.svg)
```

![Vite Logo](https://vitepress.dev/vitepress-logo-mini.svg)

## Blockquotes

```markdown
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Code Blocks

### Inline

`inline code`

### Fenced Code Blocks

```js
export default {
  name: 'MyComponent',
  // ...
}
```

```js
export default {
  name: 'MyComponent',
  // ...
}
```

## Tables

```markdown
| Option | Description |
| ------ | ----------- |
| data   | path to data files to be used |
| engine | engine to be used for processing |
| ext    | file extension to be used for output files |
```

| Option | Description |
| ------ | ----------- |
| data   | path to data files to be used |
| engine | engine to be used for processing |
| ext    | file extension to be used for output files |

