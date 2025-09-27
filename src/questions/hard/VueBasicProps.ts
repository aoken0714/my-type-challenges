import type { Debug, Equal, Expect, IsAny } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/00213-hard-vue-basic-props/README.md
type GetPropsType<T> = T extends {
  new (...args: never): infer Inst & { valueOf: () => infer R };
}
  ? R extends object
    ? Inst
    : R
  : any;

type GetProps<P> = {
  [K in keyof P]: P[K] extends { type: infer Ctor | (infer Ctor)[] }
    ? GetPropsType<Ctor>
    : GetPropsType<P[K]>;
};

type GetComputed<C> = {
  [K in keyof C]: C[K] extends () => infer R ? R : never;
};

declare function VueBasicProps<P, D, C, M>(options: {
  props: P;
  data: (this: GetProps<P>) => D;
  computed?: C & ThisType<GetProps<P> & D & GetComputed<C>>;
  methods?: M & ThisType<GetProps<P> & D & GetComputed<C> & M>;
}): any;

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>;
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ];

    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const propE = this.propE;
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ];
    },
  },
});
