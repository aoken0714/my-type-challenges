import type { Equal, Expect } from '@/utils/test-types';

type GetComputed<C> = {
  [K in keyof C]: C[K] extends () => infer R ? R : never;
};

declare function SimpleVue<
  D,
  C,
  M,
  DataType = D extends () => infer R ? R : never,
  ComputedType = GetComputed<C>,
>(options: {
  data?: D;
  computed?: C & ThisType<DataType>;
  methods?: M & ThisType<DataType & ComputedType & M>;
}): any;

SimpleVue({
  data() {
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
      alert(this.amount);
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
    },
  },
});
