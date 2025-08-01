# LeetCode 学習ディレクトリ

## 学習の進め方

### 1. 問題に取り組む
- 各問題ファイル（`two-sum.js`, `valid-parentheses.js`）を開く
- 問題文とヒントを読む
- 自分で解答を実装する

### 2. テスト実行
- 解答を実装したら、ファイル末尾のコメントアウトを外してテストを実行
- 全てのテストケースが通るまで修正する

### 3. 解答例を確認
- 自分で解答した後、`solutions/` ディレクトリの解答例を確認
- 自分の解法と比較して、改善点を学ぶ

### 4. 計算量を理解
- `complexity-analysis.md` を読んで計算量の概念を理解
- 自分の解法の計算量を分析する

## ファイル構成

```
leetcode-solutions/
├── README.md                    # このファイル
├── complexity-analysis.md       # 計算科学基礎の学習資料
├── two-sum.js                   # Two Sum問題（解答なし）
├── valid-parentheses.js         # Valid Parentheses問題（解答なし）
└── solutions/
    ├── two-sum-solution.js      # Two Sum解答例
    └── valid-parentheses-solution.js  # Valid Parentheses解答例
```

## 学習のポイント

### Two Sum問題
- **目標**: ハッシュマップの活用を理解
- **キーポイント**: 補数の概念と効率的な検索
- **計算量**: O(n)時間、O(n)空間を目指す

### Valid Parentheses問題
- **目標**: スタックデータ構造の活用を理解
- **キーポイント**: LIFOの特性と括弧の対応関係
- **計算量**: O(n)時間、O(n)空間を目指す

## 次のステップ

1. 他のLeetCode Easy問題に挑戦
2. 計算量の分析を習慣化
3. 複数の解法を比較検討
4. 面接での説明練習

---

**重要**: まずは自分で解答を試してから、解答例を確認してください！ 