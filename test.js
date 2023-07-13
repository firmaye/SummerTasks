var num = 0;
function count(call) {
  setTimeout(() => {
    call(num);
  }, 1000);
}
function count2(call) {
  setTimeout(() => {
    call(num);
  }, 2000);
}
function count3(call) {
  setTimeout(() => {
    call(num);
  }, 3000);
}
function numb(num) {
  console.log(num + 1);
}
function numb2(num) {
  console.log(num + 2);
}
function numb3(num) {
  console.log(num + 3);
}
count(numb);
count2(numb2);
count3(numb3);
