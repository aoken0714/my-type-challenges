import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >,
];
