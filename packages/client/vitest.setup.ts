import { Crypto } from '@peculiar/webcrypto';
import { TextDecoder, TextEncoder } from 'util';

import { beforeAll } from 'vitest';

Object.defineProperty(globalThis, "crypto", {
  value: new Crypto(),
});

global.TextEncoder = TextEncoder;

// @ts-expect-error Use util TextDecoder
global.TextDecoder = TextDecoder;



