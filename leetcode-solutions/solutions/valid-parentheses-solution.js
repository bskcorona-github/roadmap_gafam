/**
 * Valid Parentheses 問題の解答例
 * 
 * このファイルは学習用の解答例です。
 * まずは自分で解答を試してから、このファイルを参考にしてください。
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

// 解答例の説明
console.log("=== Valid Parentheses 解答例の説明 ===");
console.log("1. スタック解法:");
console.log("   - 開き括弧が来たらスタックに追加");
console.log("   - 閉じ括弧が来たら、スタックのトップと対応するかチェック");
console.log("   - 対応していればスタックから削除、対応していなければ無効");
console.log("   - 最後にスタックが空になっているかチェック");
console.log("");
console.log("2. 計算量:");
console.log("   - 時間計算量: O(n) - 文字列を1回だけ走査");
console.log("   - 空間計算量: O(n) - スタックのサイズ");
console.log("");
console.log("3. 正規表現解法との比較:");
console.log("   - 時間計算量: O(n²) - 文字列の置換処理");
console.log("   - 空間計算量: O(n) - 新しい文字列の生成");
console.log("   - スタック解法の方が効率的");
console.log("");
console.log("4. スタックの活用:");
console.log("   - LIFO（Last In, First Out）の特性を活用");
console.log("   - 括弧の対応関係を自然に管理できる");
console.log("   - 実装が直感的で理解しやすい"); 