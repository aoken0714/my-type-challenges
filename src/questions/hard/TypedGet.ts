import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00270-hard-typed-get/README.md
type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer First}.${infer Rest}`
    ? Get<Get<T, First>, Rest>
    : never;

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
];

type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  'foo.baz': false;
  hello: 'world';
};
