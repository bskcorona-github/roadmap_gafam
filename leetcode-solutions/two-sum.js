/**
 * LeetCode 1: Two Sum
 * 
 * 問題: 整数配列numsと整数targetが与えられたとき、nums[i] + nums[j] = targetとなる
 * 2つの数のインデックスを返す。各入力には正確に1つの解がある。
 * 
 * 例:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * 
 * 計算量分析:
 * - 時間計算量: O(n) - ハッシュマップを使用
 * - 空間計算量: O(n) - ハッシュマップのサイズ
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

// テストケース
function runTests() {
    console.log("=== Two Sum テスト ===");
    
    const testCases = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [1, 5, 8, 10, 13], target: 18, expected: [2, 3] }
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`\nテストケース ${index + 1}:`);
        console.log(`入力: nums = [${testCase.nums}], target = ${testCase.target}`);
        
        // 効率的な解法
        const startTime1 = performance.now();
        const result1 = twoSum(testCase.nums, testCase.target);
        const time1 = performance.now() - startTime1;
        
        console.log(`効率的解法: [${result1}] (${time1.toFixed(3)}ms)`);
        console.log(`期待値: [${testCase.expected}]`);
        console.log(`結果: ${JSON.stringify(result1) === JSON.stringify(testCase.expected) ? '✅ 正解' : '❌ 不正解'}`);
        
        // ブルートフォース解法（比較用）
        const startTime2 = performance.now();
        const result2 = twoSumBruteForce(testCase.nums, testCase.target);
        const time2 = performance.now() - startTime2;
        
        console.log(`ブルートフォース: [${result2}] (${time2.toFixed(3)}ms)`);
        console.log(`効率性の差: ${(time2 / time1).toFixed(2)}倍`);
    });
    
    // 計算量の比較
    console.log("\n=== 計算量比較 ===");
    console.log("効率的解法: O(n)時間, O(n)空間");
    console.log("ブルートフォース: O(n²)時間, O(1)空間");
    console.log("大きなデータセットでは効率的解法が圧倒的に優位");
}

// 実行
runTests(); 