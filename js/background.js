/** @format */

// make a Array of img files
const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
// use Radom method to put property into variable
const randomImg = images[Math.floor(Math.random() * images.length)];

// put HTML document(DOM) create element of 'img'
const backgroundImg = document.createElement('img');
// put address of img file
backgroundImg.src = `img/${randomImg}`;
// finally control Javascript to put tag into html by using appendChild (There is also prepend method)
document.body.prepend(backgroundImg);
