# @miniblox/planet-scripts

Typings of Miniblox's "planet scripts" environment.

It's a slightly stripped down version of latest JS/ES.
Some features are there (JSON, globalThis, importing), and some aren't (`crypto`, `fetch` or `XMLHttpRequest`, `Intl`, etc.).
If you can narrow down what is supported and isn't, please send a PR and update [tsconfig.json](./tsconfig.json) to be more accurate.
