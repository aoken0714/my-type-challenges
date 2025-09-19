import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/29785-medium-deep-omit/README.md
type DeepOmit<T, K extends string> = K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? {
        [P in keyof T]: P extends First ? DeepOmit<T[P], Rest> : T[P];
      }
    : T
  : Omit<T, K>;

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<
    Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>
  >,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<
    Equal<
      DeepOmit<obj, 'person.age.value'>,
      { person: { name: string; age: {} } }
    >
  >,
];
