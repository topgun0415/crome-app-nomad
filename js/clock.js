/** @format */

const $clock = document.querySelector('#clock');

function getDate() {
  const date = new Date();
  // 방법 1
  // const hour = String(date.getHours());
  // const mins = String(date.getMinutes());
  // const secs = String(date.getSeconds());
  // $clock.innerText = `${hour.padStart(2, '0')}:${mins.padStart(
  //   2,
  //   '0'
  // )}:${secs.padStart(2, '0')}`;

  // 방법 2
  const hour = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  $clock.innerText = `${hour < 10 ? '0' + hour : hour}:${
    mins < 10 ? '0' + mins : mins
  }:${secs < 10 ? '0' + secs : secs}`;
}
getDate();
setInterval(getDate, 1000);

/*
setInterval(sayhello, 5000); 5초마다 sayhello를 실행
setInterval(arguments, time) : 정해진 time 마다 arguments가 실행됨

setTimeout(sayhello, 5000); 5초에 sayhello를 실행
setTimeout(arguments, time) : 정해진 time에 한번 arguements가 실행됨

padStart(String length, number add) : String only 
*/
