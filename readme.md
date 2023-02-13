# Uint8 Concat

Concatenate mutiple Uint8Arrays super efficiently.

## Install

```sh
npm install --save uint8-concat
```

## Usage

```ts
import concat from 'uint8-concat';

const buffer1 = new Uint8Array ([ 1, 2, 3 ]);
const buffer2 = new Uint8Array ([ 4, 5, 6 ]);
const buffer3 = new Uint8Array ([ 7, 8, 9 ]);

concat ([ buffer1, buffer2, buffer3 ]); // => Uint8Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

## License

MIT © Fabio Spampinato
