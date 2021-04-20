// var meat = 29; // 数値型（Number）
// var meat = "豚肉"; // 文字列型（String）
// var meat = ["牛肉", "豚肉", "鶏肉", "マトン"]; // 配列（Array）
var meat = {
  "kind": "牛肉",
  "origin": "宮崎",
  "rank": "A5"
}; // オブジェクト(Object）

// console.log("肉じゃがは" + meat[3] + "派");
console.table(meat.origin);

document.getElementById("test").innerText = "紀文上場";
console.log(document.getElementById("test").innerText);
document.getElementById("title").innerText = "気分上上々";
