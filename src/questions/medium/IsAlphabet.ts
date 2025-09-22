import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/35252-medium-isalphabet/README.md
type IsAlphabet<S extends string> =
  Uppercase<S> extends Lowercase<S> ? false : true;

type cases = [
  Expect<Equal<IsAlphabet<'A'>, true>>,
  Expect<Equal<IsAlphabet<'z'>, true>>,
  Expect<Equal<IsAlphabet<'9'>, false>>,
  Expect<Equal<IsAlphabet<'!'>, false>>,
  Expect<Equal<IsAlphabet<'😂'>, false>>,
  Expect<Equal<IsAlphabet<''>, false>>,
];
