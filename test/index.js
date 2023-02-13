
/* IMPORT */

import {describe} from 'fava';
import concat from '../dist/index.js';

/* MAIN */

describe ( 'Uint8 Concat', it => {

  it ( 'works', t => {

    const buffer1 = new Uint8Array ([ 1, 2, 3 ]);
    const buffer2 = new Uint8Array ([ 4, 5, 6 ]);
    const buffer3 = new Uint8Array ([ 7, 8, 9 ]);

    const expected = new Uint8Array ([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    const actual = concat ([ buffer1, buffer2, buffer3 ]);

    t.deepEqual ( actual, expected );

  });

});
