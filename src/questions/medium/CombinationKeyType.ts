import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.md
type Combs<T extends any[]> = T extends readonly [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends readonly string[]
      ? `${First} ${Rest[number]}` | Combs<Rest>
      : never
    : never
  : never;

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn'];
type CaseTypeOne =
  | 'cmd ctrl'
  | 'cmd opt'
  | 'cmd fn'
  | 'ctrl opt'
  | 'ctrl fn'
  | 'opt fn';

type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];
