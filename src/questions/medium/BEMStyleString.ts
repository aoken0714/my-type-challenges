import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md
type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = E extends []
  ? M extends []
    ? never
    : `${B}--${M[number]}`
  : M extends []
    ? `${B}__${E[number]}`
    : `${B}__${E[number]}--${M[number]}`;

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<
      BEM<'btn', [], ['small', 'medium', 'large']>,
      'btn--small' | 'btn--medium' | 'btn--large'
    >
  >,
];
