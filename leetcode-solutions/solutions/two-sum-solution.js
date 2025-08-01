/**
 * Two Sum 問題の解答例
 * 
 * このファイルは学習用の解答例です。
 * まずは自分で解答を試してから、このファイルを参考にしてください。
 */

/**
 * 解法1: ハッシュマップを使用した効率的な解法
 * 時間計算量: O(n), 空間計算量: O(n)
 */
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // 補数が既にマップに存在するかチェック
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // 現在の数とインデックスをマップに保存
        numMap.set(nums[i], i);
    }
    
    return []; // 解が見つからない場合
}

/**
 * 解法2: ブルートフォース解法（比較用）
 * 時間計算量: O(n²), 空間計算量: O(1)
 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// 解答例の説明
console.log("=== Two Sum 解答例の説明 ===");
console.log("1. ハッシュマップ解法:");
console.log("   - 各要素について、target - 現在の要素を計算");
console.log("   - その補数が既に見た要素の中にあるかチェック");
console.log("   - 見つかれば、そのインデックスと現在のインデックスを返す");
console.log("   - 見つからなければ、現在の要素とインデックスをマップに保存");
console.log("");
console.log("2. 計算量:");
console.log("   - 時間計算量: O(n) - 配列を1回だけ走査");
console.log("   - 空間計算量: O(n) - ハッシュマップのサイズ");
console.log("");
console.log("3. ブルートフォース解法との比較:");
console.log("   - 時間計算量: O(n²) - 二重ループ");
console.log("   - 空間計算量: O(1) - 追加のメモリ不要");
console.log("   - 大きなデータセットでは効率的解法が圧倒的に優位"); 