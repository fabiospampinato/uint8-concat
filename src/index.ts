
/* MAIN */

const concat = ( chunks: Uint8Array[] ): Uint8Array => {

  const length = chunks.reduce ( ( acc, chunk ) => acc + chunk.byteLength, 0 );
  const buffer = new Uint8Array ( length );

  for ( let offset = 0, i = 0, l = chunks.length; i < l; i++ ) {

    buffer.set ( chunks[i], offset );

    offset += chunks[i].byteLength;

  }

  return buffer;

};

/* EXPORT */

export default concat;
