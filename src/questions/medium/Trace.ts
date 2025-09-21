import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/35191-medium-trace/README.md
type Trace<T extends unknown[][]> = {
  [P in keyof T]: T[P][P & keyof T[P]];
}[number];

type cases = [
  Expect<Equal<Trace<[[1, 2], [3, 4]]>, 1 | 4>>,
  Expect<Equal<Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>, 0>>,
  Expect<
    Equal<
      Trace<[['a', 'b', ''], ['c', '', ''], ['d', 'e', 'f']]>,
      'a' | '' | 'f'
    >
  >,
];
