let msg = "Quote of the day";
let i = 10;

var request = new XMLHttpRequest();
var quote = "https://quotes.rest/qod?language=en"; // quotes api

var bdiv = document.createElement("div");
bdiv.className = "main-div";

var auth = document.createElement("p");
auth.className = "author-name";

request.open("GET", quote, true);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  msg = data.contents.quotes[0].quote; // quote message
  msgAut = data.contents.quotes[0].author; // quotes' author
};

var display = document.createElement("p");
display.className = "main-text";

//callback hell
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            setTimeout(() => {
              setTimeout(() => {
                setTimeout(() => {
                  setTimeout(() => {
                    setTimeout(() => {
                      setTimeout(() => {
                        display.innerHTML = `${msg}`; //quote
                        auth.innerHTML = `- ${msgAut}`; //author of the quote
                      }, 1000);
                      display.innerHTML = i--;
                    });
                    display.innerHTML = i;
                  }, 1000);
                  display.innerHTML = i--;
                }, 1000);
                display.innerHTML = i--;
              }, 1000);
              display.innerHTML = i--;
            }, 1000);
            display.innerHTML = i--;
          }, 1000);
          display.innerHTML = i--;
        }, 1000);
        display.innerHTML = i--;
      }, 1000);
      display.innerHTML = i--;
    }, 1000);
    display.innerHTML = i--;
  }, 1000);
  display.innerHTML = i--;
}, 1000);

document.body.style.backgroundColor = "#eaeaea";

bdiv.appendChild(display);
bdiv.appendChild(auth);

document.body.appendChild(bdiv);
