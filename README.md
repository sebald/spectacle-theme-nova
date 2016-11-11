<h1 align="center">
  <img src="https://raw.githubusercontent.com/sebald/spectacle-theme-nova/master/title.png" alt="Spectacle Theme: Nova"/>
</h1>

A theme for [Spectacle](https://github.com/FormidableLabs/spectacle) based on the awesome [Nova](http://www.trevordmiller.com/nova/) color theme by [Trevor D. Miller](https://github.com/trevordmiller) :sparkling_heart:

#### [Here is an example of a presentation using the theme.](https://sebald.github.io/spectacle-theme-nova)

## Installation

```
npm install spectacle-theme-nova
```

## Usage

```jsx
import { Spectacle, Deck, Slide } from 'spectacle';
import createTheme from 'spectale-theme-nova';

const theme = createTheme();

const Presentation = () => (
  <Spectacle theme={theme}>
    <Deck>
      <Slide>...</Slide>
    </Deck>
  </Spectacle>
);
```

- You can choose between the regular Nova colors and a bright (inversed) version. The later will be generated if you call `createTheme` with `'avon'` as argument.
- It is possible to overwrite any setting with your custom styles by passing an object as second argument to the `createTheme` function.

**Example:**

```jsx
// Get the "bright" Nova theme
const theme = createTheme('avon');
```

```jsx
// Color the background in slategray
const customStyles = {
  global: {
    body: { background: 'slategray' }
  }
};
const theme = createTheme(null, customStyles);
```

For further information you can also check out the example from this repo.
You'll find the source code [here]():

### Important Note

By default the package exposes the "raw" un-transpiled files. Meaning, all fonts and styles are not bundled. This allows you to do whatever you want with the files when you bundle your presentation.

For example, if you're using [Melodrama](https://github.com/sebald/melodrama) to build your presentation, all fonts can be extracted to have better performance.

If you want a **bundled version** import `'spectacle-theme-nova/bundle'` instead.

## Syntax Highlighting

This theme includes a custom color theme for [PrismJS](https://github.com/PrismJS/prism). Because not everyone might need syntax highlighting you have to import it yourself:

```js
import 'spectacle-theme-nova/syntax/prism.nova.css';
```

By default PrismJS doesn't have a different color for *globals* or certain *statement* (like `return` or `if`). But the Nova color theme does make those distinctions. In order to have a "better" syntax highlighting you can use some custom highlighting. Currently there is support for:

- JavaScript: `import 'spectacle-theme-nova/syntax/prism-javascript'`
- TypeScript: `import 'spectacle-theme-nova/syntax/prism-typescript'`

You can check out the difference between the highlighting in the below picture.

![custom syntax](./syntax_highlighting.png)