import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
type ObjectEntries<T> = {
  [K in keyof T]-?: T[K] extends undefined
    ? [K, undefined]
    : {} extends Pick<T, K>
      ? [K, T[K] extends infer U | undefined ? U : never]
      : [K, T[K]];
}[keyof T];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ['key', string | undefined]
    >
  >,
];
