console.log(document.getElementById("btn1"));

const test2 = () => {
  console.log("test2がクリックされたぞ！");
}

// document.getElementById("btn1").addEventListener("click", test2);

document.getElementById("btn1").addEventListener("click", function(){
  console.log("無名関数1");
});

document.getElementById("btn2").addEventListener("click", () => {
  console.log("無名関数2");
});

function test1() {
  console.log("test1がクリックされたぞ！");
}
