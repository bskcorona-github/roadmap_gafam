/**
 * ========================================
 * LeetCode 1: Two Sum
 * ========================================
 * 
 * 【問題文】
 * 整数配列numsと整数targetが与えられたとき、nums[i] + nums[j] = targetとなる
 * 2つの数のインデックスを返してください。
 * 
 * 【例】
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * 説明: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * 【制約】
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - 正確に1つの解が存在する
 * 
 * 【ヒント】
 * 1. ブルートフォース: 二重ループで全ての組み合わせを試す
 * 2. 効率的解法: ハッシュマップで補数を探す
 * 3. target - 現在の要素 = 探したい数
 * 
 * 【目標】
 * 時間計算量: O(n), 空間計算量: O(n)
 */

// ここに解答を書いてください
function twoSum(nums, target) {
    const numMap = new Map();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(numMap.has(complement)){
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
}

// テストは別ファイルで実行してください
// node test-two-sum.js 