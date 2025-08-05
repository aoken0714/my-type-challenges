# my-type-challenges

TypeScriptの型レベルプログラミングスキル向上のための [type-challenges](https://github.com/type-challenges/type-challenges) 課題解答集です。

## 概要

このリポジトリは、type-challengesの課題を解いてTypeScriptの型システムへの理解を深めることを目的としています。各課題の解答をTSファイルで管理し、学習の進捗を記録しています。

## プロジェクト構造

```
src/
├── questions/     # 課題解答ファイル
│   ├── easy/      # Easy難易度の課題
│   ├── medium/    # Medium難易度の課題
│   ├── hard/      # Hard難易度の課題
│   └── extreme/   # Extreme難易度の課題
└── utils/         # テスト用ユーティリティ
```

## 使い方

1. 各課題ファイルを開いて型定義を確認
2. テストケースで動作を検証
3. TypeScriptコンパイラで型チェックを実行

```bash
# 型チェック実行
npm run type-check

# 特定ファイルの型チェック
npx tsc --noEmit src/questions/easy/Pick.ts
```

## 学習目標

- TypeScriptの高度な型機能の習得
- 型レベルプログラミングの理解
- 複雑な型変換・操作の実装能力向上

## 参考リンク

- [type-challenges 公式リポジトリ](https://github.com/type-challenges/type-challenges)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
