import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/30430-medium-tower-of-hanoi/README.md
type Hanoi<
  N extends number,
  From = 'A',
  To = 'B',
  Intermediate = 'C',
  CurrentIndex extends unknown[] = [],
> = CurrentIndex['length'] extends N
  ? []
  : [
      ...Hanoi<N, From, Intermediate, To, [...CurrentIndex, unknown]>,
      [From, To],
      ...Hanoi<N, Intermediate, To, From, [...CurrentIndex, unknown]>,
    ];

type Tests = [
  Expect<Equal<Hanoi<0>, []>>,
  Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  Expect<
    Equal<
      Hanoi<3>,
      [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['A', 'B'],
        ['C', 'A'],
        ['C', 'B'],
        ['A', 'B'],
      ]
    >
  >,
  Expect<
    Equal<
      Hanoi<5>,
      [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['A', 'B'],
        ['C', 'A'],
        ['C', 'B'],
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'A'],
        ['C', 'A'],
        ['B', 'C'],
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['A', 'B'],
        ['C', 'A'],
        ['C', 'B'],
        ['A', 'B'],
        ['C', 'A'],
        ['B', 'C'],
        ['B', 'A'],
        ['C', 'A'],
        ['C', 'B'],
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['A', 'B'],
        ['C', 'A'],
        ['C', 'B'],
        ['A', 'B'],
      ]
    >
  >,
];
