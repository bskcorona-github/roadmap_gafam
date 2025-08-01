/**
 * LeetCode 20: Valid Parentheses
 * 
 * 問題: 文字列sが与えられたとき、括弧が有効かどうかを判定する。
 * 括弧は以下のペアで構成される: '()', '{}', '[]'
 * 
 * 例:
 * Input: s = "()"
 * Output: true
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * 計算量分析:
 * - 時間計算量: O(n) - 文字列を1回走査
 * - 空間計算量: O(n) - スタックのサイズ
 */

/**
 * 解法: スタックを使用した解法
 * 時間計算量: O(n), 空間計算量: O(n)
 */
function isValid(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        // 開き括弧の場合、スタックに追加
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // 閉じ括弧の場合、スタックのトップと比較
        else if (char === ')' || char === '}' || char === ']') {
            // スタックが空の場合、無効
            if (stack.length === 0) {
                return false;
            }
            
            // 対応する開き括弧と比較
            const top = stack.pop();
            if (top !== brackets[char]) {
                return false;
            }
        }
    }
    
    // スタックが空でない場合、無効
    return stack.length === 0;
}

/**
 * 解法2: 正規表現を使用した解法（参考）
 * 時間計算量: O(n²) - 文字列の置換処理
 * 空間計算量: O(n)
 */
function isValidRegex(s) {
    let str = s;
    const originalLength = str.length;
    
    // 対応する括弧ペアを繰り返し削除
    while (str.length > 0) {
        const newStr = str.replace(/\(\)|\[\]|\{\}/g, '');
        if (newStr.length === str.length) {
            break; // 変更がない場合、ループ終了
        }
        str = newStr;
    }
    
    return str.length === 0;
}

// テストケース
function runTests() {
    console.log("=== Valid Parentheses テスト ===");
    
    const testCases = [
        { s: "()", expected: true },
        { s: "()[]{}", expected: true },
        { s: "(]", expected: false },
        { s: "([)]", expected: false },
        { s: "{[]}", expected: true },
        { s: "(((", expected: false },
        { s: ")))", expected: false },
        { s: "", expected: true },
        { s: "({[]})", expected: true },
        { s: "({[}])", expected: false }
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`\nテストケース ${index + 1}:`);
        console.log(`入力: s = "${testCase.s}"`);
        
        // スタック解法
        const startTime1 = performance.now();
        const result1 = isValid(testCase.s);
        const time1 = performance.now() - startTime1;
        
        console.log(`スタック解法: ${result1} (${time1.toFixed(3)}ms)`);
        console.log(`期待値: ${testCase.expected}`);
        console.log(`結果: ${result1 === testCase.expected ? '✅ 正解' : '❌ 不正解'}`);
        
        // 正規表現解法（比較用）
        const startTime2 = performance.now();
        const result2 = isValidRegex(testCase.s);
        const time2 = performance.now() - startTime2;
        
        console.log(`正規表現解法: ${result2} (${time2.toFixed(3)}ms)`);
        console.log(`効率性の差: ${(time2 / time1).toFixed(2)}倍`);
    });
    
    // 計算量の比較
    console.log("\n=== 計算量比較 ===");
    console.log("スタック解法: O(n)時間, O(n)空間");
    console.log("正規表現解法: O(n²)時間, O(n)空間");
    console.log("スタック解法の方が効率的");
}

// 実行
runTests(); 