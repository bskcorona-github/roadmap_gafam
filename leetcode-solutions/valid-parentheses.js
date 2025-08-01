/**
 * ========================================
 * LeetCode 20: Valid Parentheses
 * ========================================
 * 
 * 【問題文】
 * 文字列sが与えられたとき、括弧が有効かどうかを判定してください。
 * 括弧は以下のペアで構成されます: '()', '{}', '[]'
 * 
 * 【例】
 * Input: s = "()"
 * Output: true
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * 【制約】
 * - 1 <= s.length <= 10^4
 * - sは '(', ')', '{', '}', '[' および ']' のみで構成される
 * 
 * 【ヒント】
 * 1. スタックを使用する
 * 2. 開き括弧が来たらスタックに追加
 * 3. 閉じ括弧が来たら、スタックのトップと対応するかチェック
 * 4. 最後にスタックが空になっているかチェック
 * 
 * 【目標】
 * 時間計算量: O(n), 空間計算量: O(n)
 */

// ここに解答を書いてください
function isValid(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        // 開き括弧の場合
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // 閉じ括弧の場合
        else if (char === ')' || char === '}' || char === ']') {
            // スタックが空なら無効
            if (stack.length === 0) return false;
            
            // スタックの最後と対応するかチェック
            const top = stack.pop();
            if (top !== brackets[char]) return false;
        }
    }
    
    // 最後にスタックが空になっているかチェック
    return stack.length === 0;
    
} 