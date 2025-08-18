import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
type Falsy =
  | false
  | 0
  | ''
  | []
  | { readonly [key: PropertyKey]: never }
  | undefined
  | null;
type AnyOf<T extends readonly unknown[]> = T extends readonly [
  infer First,
  ...infer Rest,
]
  ? First extends Falsy
    ? AnyOf<Rest>
    : true
  : false;

type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];
