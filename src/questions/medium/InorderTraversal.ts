import type { Equal, Expect } from '@/utils/test-types';

// https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = T extends null
  ? []
  : T extends TreeNode
    ? [
        ...InorderTraversal<T['left']>,
        T['val'],
        ...InorderTraversal<T['right']>,
      ]
    : never;

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const;

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const;

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const;

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
];
