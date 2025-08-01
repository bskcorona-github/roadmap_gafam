# 計算科学基礎: 時間計算量と空間計算量

## 概要
アルゴリズムの効率性を評価するための重要な概念です。

## 時間計算量 (Time Complexity)

### 基本的な計算量
- **O(1)**: 定数時間 - 入力サイズに関係なく一定時間
- **O(log n)**: 対数時間 - 二分探索など
- **O(n)**: 線形時間 - 配列の走査など
- **O(n log n)**: 線形対数時間 - 効率的なソートアルゴリズム
- **O(n²)**: 二乗時間 - 二重ループ、バブルソート
- **O(2ⁿ)**: 指数時間 - 再帰的なフィボナッチ
- **O(n!)**: 階乗時間 - 全順列の生成

### 実例
```javascript
// O(1) - 定数時間
function getFirstElement(arr) {
    return arr[0];
}

// O(n) - 線形時間
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// O(n²) - 二乗時間
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
```

## 空間計算量 (Space Complexity)

### 基本的な空間計算量
- **O(1)**: 定数空間 - 追加のメモリをほとんど使用しない
- **O(n)**: 線形空間 - 配列やハッシュマップのサイズ
- **O(n²)**: 二乗空間 - 二次元配列など

### 実例
```javascript
// O(1) - 定数空間
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// O(n) - 線形空間
function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
```

## LeetCode問題での応用

### Two Sum問題
- **効率的解法**: O(n)時間, O(n)空間
- **ブルートフォース**: O(n²)時間, O(1)空間
- **トレードオフ**: 時間 vs 空間

### Valid Parentheses問題
- **スタック解法**: O(n)時間, O(n)空間
- **正規表現解法**: O(n²)時間, O(n)空間
- **最適解**: スタック解法

## 実践的な選択基準

### 時間計算量を優先する場合
- リアルタイム処理が必要
- メモリが十分にある
- ユーザー体験が重要

### 空間計算量を優先する場合
- メモリが制限されている
- 大規模データを処理
- 組み込みシステム

## 面接でのポイント

1. **計算量の説明**: なぜその計算量になるのかを説明
2. **トレードオフ**: 時間 vs 空間の選択理由
3. **最適化**: さらなる改善の可能性
4. **実装**: 実際のコードで表現

## 練習問題

1. 配列の重複要素を削除する関数の計算量を分析
2. 文字列の回文判定の最適化
3. ソートアルゴリズムの比較（バブル、マージ、クイック）

---

**学習のポイント**: 計算量は理論的な概念ですが、実際のコードで実感することが重要です。 