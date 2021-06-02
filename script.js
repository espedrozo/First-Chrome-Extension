// import $ from "jquery";

const paises = [
  'África do Sul',
  'Albânia',
  'Alemanha',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua',
  'Arábia Saudita',
  'Argentina',
  'Armênia',
  'Aruba',
  'Austrália',
  'Áustria',
  'Azerbaijão',
  'Bahamas',
  'Bahrein',
  'Bangladesh',
  'Barbados',
  'Bélgica',
  'Benin',
  'Bermudas',
  'Botsuana',
  'Brasil',
  'Brunei',
  'Bulgária',
  'Burkina Fasso',
  'botão',
  'Cabo Verde',
  'Camarões',
  'Camboja',
  'Canadá',
  'Cazaquistão',
  'Chade',
  'Chile',
  'China',
];

let filter = document.querySelector('input[id="search-text"]');
console.log(filter);
filter.addEventListener('input', function () {
  // console.log(this.value+"$$$$$$");
  // let resp = []
  // for (item of paises) {
  //     if (item == filter.value) {
  //         resp.push(item);
  //     }
  // }
  // console.log(resp)
});

var botao = document.querySelector('#btn');
botao.addEventListener('click', function (event) {
  event.preventDefault();
  // var text = document.querySelector("#search-text");
  // console.log("lupa clicada");
  // let listaPaises = paises;
  // console.log(listaPaises);
  let resp = [];
  for (item of paises) {
    if (item == filter.value) {
      resp.push(item);
    }
  }
  console.log(resp);

  // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  //     var url = tabs[0].url;
  //     // use `url` here inside the callback because it's asynchronous!

  // }).then(() => {
  //     console.log(url);
  // })

  // var name = document.querySelector("input");
  // console.log(name);
});

// tests and fails ------------------------------------------------------------------------

// let country = []
// function filteredCountry() {
//     for(let country of paises) {
//         console.log(country);
//         country.push(country);
//     }
//     filteredCountry("China");
// }
// console.log(country)

// var filter = document.querySelector("#search-text");
// filter.addEventListener("input", function(){
//     console.log(this.value+"%%%%%%%%%%%%%%%%%%%%%%%%%%%");
//     let filteredText = [1111111];
//     let inputText = filter;
//     console.log(inputText+"&&&&&&&&&&&&&&")
//     for(let item of paises) {
//         if(item == inputText) {
//             console.log(item + "#########################");
//             filteredText.push(item);
//         }
//     }
// console.log(filteredText+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// });

// chrome.runtime.onMessage.addListener(function (request, sender) {
//   if (request.action == 'getSource') {
//     message.innerText = request.source;
//   }
// });

// chrome.runtime.onMessage.addListener(function(cmd, sender, sendResponse) {
//   console.log("chrome.runtime.onMessage: "+cmd);
//   switch(cmd) {
//   case "getHtml":
//       // retrieve document HTML and send to popup.js
//       sendResponse({title: document.title, url: window.location.href, html: document.documentElement.innerHTML});
//       break;
//   case "getHeadTitle":
//       // retrieve title HTML and send to popup.js
//       sendResponse(document.getElementsByTagName("title")[0].innerHTML);
//       break;
//   default:
//       sendResponse(null);
//   }
// });

chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log('request', request);
  var message = document.querySelector('#message');
  if (request.action == 'getSource') {
    this.pageSource = request.source;
    // var teste = this.pageSource.match(/<title[^>]*>([^<]+)<\/title>/)[1];
    // alert(title);
    // message.innerText = teste;

    let parser = new DOMParser();
    let document = parser.parseFromString(this.pageSource, 'text/html');
    let title = document.querySelector('input[name="q"]').value;

    message.innerText = title;
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.executeScript(tabs[0].id, {
    code: 'var s = document.documentElement.outerHTML; chrome.runtime.sendMessage({action: "getSource", source: s});',
  });
});

function onWindowLoad() {
  var message = document.querySelector('#message');

  // chrome.tabs.executeScript(
  //   null,
  //   {
  //     file: 'getPagesSource.js',
  //   },
  //   function () {
  //     // If you try and inject into an extensions page or the webstore/NTP you'll get an error
  //     if (chrome.runtime.lastError) {
  //       message.innerText =
  //         'There was an error injecting script : \n' +
  //         chrome.runtime.lastError.message;
  //     }
  //   }
  // );
  chrome.tabs.executeScript(
    null,
    {
      code: 'var s = document.documentElement.outerHTML; chrome.runtime.sendMessage({action: "getSource", source: s});',
    },
    function () {
      if (chrome.runtime.lastError) {
        message.innerText =
          'There was an error injecting script : \n' +
          chrome.runtime.lastError.message;
      }
    }
  );
}

window.onload = onWindowLoad;
