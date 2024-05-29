// 使用する文字の配列
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

// HTML要素を取得
let pw1 = document.getElementById("pw1");
let pw2 = document.getElementById("pw2");

// 指定された長さのランダムなパスワードを生成する関数
function generateRandomPassword(length) {
    let password = ''; // パスワードの初期化
    for (let i = 0; i < length; i++) { // length回ループ
        let randomIndex = Math.floor(Math.random() * characters.length); // ランダムなインデックスを生成
        password += characters[randomIndex]; // ランダムに選ばれた文字をパスワードに追加
    }
    return password; // 最終的なパスワードを返す
}

// 生成されたパスワードをHTML要素に設定する関数
function setPasswords() {
    let passwordLength = 15; // パスワードの長さを設定
    pw1.textContent = generateRandomPassword(passwordLength); // pw1にランダムなパスワードを設定
    pw2.textContent = generateRandomPassword(passwordLength); // pw2にランダムなパスワードを設定
}

