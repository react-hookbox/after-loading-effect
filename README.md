# @react-hookbox/after-loading-effect

> useAfterLoadingEffect

[![NPM][npm-image]][npm-link]
[![Minzipped Bundle Size][bundlephobia-image]][bundlephobia-link]

## Install

```bash
npm install --save @react-hookbox/after-loading-effect
```
or
```bash
yarn add @react-hookbox/after-loading-effect
```

## Usage

### useAfterLoadingEffect

Both for JavaScript and Typescript:

```typescript
import { useAfterLoadingEffect } from '@react-hookbox/after-loading-effect';
// OR
// import useAfterLoadingEffect from '@react-hookbox/after-loading-effect';

// then
useAfterLoadingEffect(isLoading, () => {
  // this will work only when isLoading turned from true to false
  console.log('Loading ended! 🎉🎉🎉');
});
```

## Params

### useAfterLoadingEffect

* `isLoading: boolean`. When this changes from true to false,
  then the callback fn will be called in effect-ive time.
* `fn: EffectCallback`. the callback function to call after loading ends.
  The return value of this function will be provided to the effect hook.
* `useEffectHook = useEffect`. (Optional) The hook to use for calling the
  callback function.

## License

MIT © [hakobpogh][github-hakobpogh]

[npm-image]: https://img.shields.io/npm/v/@react-hookbox/after-loading-effect.svg
[npm-link]: https://www.npmjs.com/package/@react-hookbox/after-loading-effect
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@react-hookbox/after-loading-effect
[bundlephobia-link]: https://bundlephobia.com/result?p=@react-hookbox/after-loading-effect
[github-hakobpogh]: https://github.com/hakobpogh
