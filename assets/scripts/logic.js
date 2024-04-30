var i = 0;
var txt = 'qrawler stuff folder_';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("title").innerHTML = "";
typeWriter();