import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.md
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >,
];
