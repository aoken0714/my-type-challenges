import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/09616-medium-parse-url-params/README.md
type ParseUrlParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? ParseParam<Param> | ParseUrlParams<Rest>
    : T extends `${string}:${infer Param}`
      ? ParseParam<Param>
      : never;

type ParseParam<T extends string> = T extends `${infer P}/${string}` ? P : T;

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
];
