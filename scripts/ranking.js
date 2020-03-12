const players = [{"name": "Eryk Małecki",
"zydelion": 1,
"commander": [
  ["Zur the Enchanter", 1]
]
}, {
  "name": "Eliza Kołodziej",
  "zydelion": 2,
  "commander": [
    ["Jeleva, Nephalia's Scourge", 3]
  ]
}, {
  "name": "Waldemar Piekarz",
  "zydelion": 1,
  "commander": [
    ["Chulane, Teller of Tales", 2],
  ]
}, {
  "name": "Dawid Ciesielski",
  "zydelion": 3,
  "commander": [
    ["Animar, Soul of Elements", 7],
    ["Golos, Tireless Pilgrim", 3],
    ["Tasigur, the Golden Fang", 1],
  ]
}, {
  "name": "Karol Esko",
  "zydelion": 4,
  "commander": [
    ["Aminatou, the Fateshifter", 6],
    ["Elsha of the Infinite", 5],
    ["Jalira, Master Polymorphist", 1],
    ["Teysa Karlov", 1],
  ]
}, {
  "name": "Mateusz Pawluk",
  "zydelion": 2,
  "commander": [
    ["Tolsimir, Friend to Wolves", 3],
    ["Arahbo, Roar of the World", 1]
  ]
}, {
  "name": "Marcin Gański",
  "zydelion": 5,
  "commander": [
    ["Grumgully, the Generous", 11],
    ["Yarok, the Desecrated", 4],
    ["Mina and Denn, Wildborn", 1],
    [
      [
        ["Tymna the Weaver"],
        ["Ikra Shidiqi, the Usurper"]
      ], 2
    ], //podwójny generał
  ]
}, {
  "name": "Michał Ożgo",
  "zydelion": 1,
  "commander": [
    ["Thada Adel, Acquisitor", 2]
  ]
}, {
  "name": "Bartosz Jurczyk",
  "zydelion": 2,
  "commander": [
    ["Muldrotha, the Gravetide", 6],
    ["K'rrik, Son of Yawgmoth", 3]
  ]
}, {
  "name": "Krzysztof Ciesielka",
  "zydelion": 1,
  "commander": [
    ["Niv-Mizzet Reborn", 1],
    ["Xantcha, Sleeper Agent", 1]
  ]
}, {
  "name": "Łukasz Próchniak",
  "zydelion": 1,
  "commander": [
    ["Marwyn, the Nurturer", 2]
  ]
}
];


// const players = [
//   {
//     "name": "Eryk Małecki",
//     "zydelion": 12,
//     "commander": [
//       ["Grand Arbiter Augustin IV", 7],
//       ["Anafenza, the Foremost", 13],
//       ["Niv-Mizzet, Parun", 2],
//       ["Gaddock Teeg", 3],
//       ["Mageta the Lion", 1],
//       ["Heartless Hidetsugu", 1],
//       ["Etali, Primal Storm", 2],
//       ["Sisay, Weatherlight Captain", 2],
//       ["Adriana, Captain of the Guard", 1],
//       ["Zur the Enchanter", 1],
//     ]
//   },
//   {
//     "name": "Jakub Grela",
//     "zydelion": 3,
//     "commander": [
//       ["Derevi, Empyrial Tactician", 6],
//       ["Raff Capashen, Ship's Mage", 2]
//     ]
//   },
//   {
//     "name": "Krzysztof Guz",
//     "zydelion": 1,
//     "commander": [
//       ["Karlov of the Ghost Council", 3]
//     ]
//   },
//   {
//     "name": "Jarosław Mroziński",
//     "zydelion": 5,
//     "commander": [
//       ["Brago, King Eternal", 2],
//       ["Urza, Lord High Artificer", 10]
//     ]
//   },
//   {
//     "name": "Michał Kowalczyk",
//     "zydelion": 3,
//     "commander": [
//       [
//         [
//           ["Thrasios, Triton Hero"],
//           ["Tymna the Weaver"]
//         ], 10
//       ]
//     ]
//   },
//   {
//     "name": "Dominik Kuszneruk",
//     "zydelion": 1,
//     "commander": [
//       ["Zur the Enchanter", 1]
//     ]
//   },
//   {
//     "name": "Eliza Kołodziej",
//     "zydelion": 2,
//     "commander": [
//       ["Jeleva, Nephalia's Scourge", 3]
//     ]
//   },
//   {
//     "name": "Waldemar Piekarz",
//     "name": "Bartosz Dekański",
//     "zydelion": 1,
//     "commander": [
//       ["Niv-Mizzet, Parun", 3]
//     ]
//   },
//   {
//     "name": "Jakub Szyszko",
//     "zydelion": 1,
//     "commander": [
//       ["Thelon of Havenwood", 2]
//     ]
//   },
//   {
//     "name": "Łukasz Cieniawa",
//     "zydelion": 1,
//     "commander": [
//       ["Inalla, Archmage Ritualist", 1],
//       ["Feather, the Redeemed", 1]
//     ]
//   },
//   {
//     "name": "Krzysztof Ciesielka",
//     "zydelion": 9,
//     "commander": [
//       ["Daretti, Scrap Savant", 5],
//       ["The Ur-Dragon", 1],
//       ["Kadena, Slinking Sorcerer", 3],
//       ["Niv-Mizzet Reborn", 4],
//       ["Xantcha, Sleeper Agent", 1],
//       ["Yuriko, the Tiger's Shadow", 3]
//     ]
//   },
//   {
//     "name": "Rafał Krygier",
//     "zydelion": 6,
//     "commander": [
//       ["Prossh, Skyraider of Kher", 6],
//       ["Maelstrom Wanderer", 8],
//       ["Narset, Enlightened Master", 2],
//       ["Chromium, the Mutable", 1],
//       ["Golos, Tireless Pilgrim", 2],
//       ["Zur the Enchanter", 2]
//     ]
//   },
//   {
//     "name": "Karol Esko",
//     "zydelion": 9,
//     "commander": [
//       ["Aminatou, the Fateshifter", 8],
//       ["Teysa Karlov", 4],
//       ["Jalira, Master Polymorphist", 1],
//       ["Feather, the Redeemed", 5],
//       ["Elsha of the Infinite", 4],
//       ["Jeleva, Nephalia's Scourge", 2]
//     ]
//   },
//   {
//     "name": "Filip Wnukowski",
//     "zydelion": 1,
//     "commander": [
//       ["Chulane, Teller of Tales", 2],
//     ]
//   },
//   {
//     "name": "Dawid Ciesielski",
//     "zydelion": 1,
//     "commander": [
//       ["Animar, Soul of Elements", 2],
//       ["Golos, Tireless Pilgrim", 1],
//     ]
//   },
//   {
//     "name": "Karol Esko",
//     "name": "Marcin Gański",
//     "zydelion": 8,
//     "commander": [
//       ["Gahiji, Honored One", 5],
//       ["Jodah, Archmage Eternal", 1],
//       ["Grumgully, the Generous", 12],
//     ]
//   },
//   {
//     "name": "Paweł Górecki",
//     "zydelion": 1,
//     "commander": [
//       ["Aminatou, the Fateshifter", 4],
//     ]
//   },
//   {
//     "name": "Mateusz Pawluk",
//     "zydelion": 1,
//     "commander": [
//       ["Tolsimir, Friend to Wolves", 2]
//     ]
//   },
//   {
//     "name": "Marcin Gański",
//     "zydelion": 1,
//     "commander": [
//       ["Grumgully, the Generous", 2],
//     ]
//   },
//   {
//     "name": "Artur Sołtan",
//     "zydelion": 1,
//     "commander": [
//       ["Kadena, Slinking Sorcerer ", 1],
//       ["Yawgmoth, Thran Physician", 1]
//     ]
//   },
//   {
//     "name": "Michał Ożgo",
//     "zydelion": 1,
//     "commander": [
//       ["Thada Adel, Acquisitor", 2]
//     ]
//   },
//   {
//     "name": "Angelika Harasymiuk ",
//     "zydelion": 1,
//     "commander": [
//       ["Meren of Clan Nel Toth", 2]
//     ]
//   }
// ];

var sortedPlayers = sortPlayers(players); //sortujemy graczy po ilości wygranych zydelionów i commanderów po ilości wygranych gier

function sortPlayers(unsortedPlayers) {
  let playersToSort = [...unsortedPlayers];
  playersToSort.sort((a, b) => b.zydelion - a.zydelion);
  playersToSort.forEach(function(item) {
    item.commander.sort((a, b) => b[1] - a[1])
  })
  return playersToSort;
}

function rankPlayers(playersToRank) {
  let unrankedPlayers = [...playersToRank];
  let rankedPlayers = [];
  unrankedPlayers.reduce(function(prev, item, index) {
    if (index == 1) {
      prev.rank = 1; //pierwszy na liście ma zawsze 1 miejsce
      rankedPlayers.push(prev);
      if (item.zydelion == prev.zydelion) {
        item.rank = prev.rank; //jak kolejny ma tyle samo zydelionów, to ma być ta sama liczba
        rankedPlayers.push(item);
      } else if (item.zydelion < prev.zydelion) {
        item.rank = prev.rank + 1; //jak kolejny ma mniej zydelionów, to zwiększamy miejsce
        rankedPlayers.push(item)
      }
    } else if (item.zydelion == prev.zydelion) {
      item.rank = prev.rank; //jak kolejny ma tyle samo zydelionów, to ma być ta sama liczba
      rankedPlayers.push(item);
    } else if (item.zydelion < prev.zydelion) {
      item.rank = prev.rank + 1; //jak kolejny ma mniej zydelionów, to zwiększamy miejsce
      rankedPlayers.push(item);
    }
    return item;
  })
  return rankedPlayers;
}

var rankedPlayers = rankPlayers(sortedPlayers);

function inflection(num) {
  //funckja która odmienia mi słówka "wygrana"
  if (num == 1) {
    return ` wygrany mecz `;
  } else if (num > 1 && num <= 4) {
    return ` wygrane mecze `;
  } else {
    return ` wygranych meczów `;
  }
}

var winsPerCommander = commandersArray => commandersArray.map(a => a[1]); //funkcja, która wycina mi same ilości wygranych każdego commandera

function totalWin(playerNumber, players) {
  let sumOfWins = winsPerCommander(players[playerNumber].commander);
  return sumOfWins.reduce((a, b) => a + b, 0); // funkcja, która podaje mi łączną liczbę wygranych meczy danego gracza
}

function createCommanderInfo(commandersArray, totalWins) {
  //funkcja, która tworzy linijki w liście rozwijanej commanderów
  let commanderBox = document.createElement("div"); //tworzymy diva z listą rozwijaną commnaderów
  commanderBox.setAttribute("class", "info");
  commandersArray.map(function(item) {
    let winsLineBox = document.createElement("div"); //tworzymy diva z pojedynczą linią w liście
    winsLineBox.setAttribute("class", "winsline");
    let commanderNameBox = document.createElement("div"); //tworzymy diva z nazwą danego commandera
    commanderNameBox.setAttribute("class", "cmdname");
    if (Array.isArray(item[0]) == true) {
      commanderNameBox.innerHTML = `<p><a href="" class="mtgcard">${item[0][0]}</a></p>
      <p><a href="" class="mtgcard">${item[0][1]}</a></p>`;
    } else {
      commanderNameBox.innerHTML = `<p><a href="" class="mtgcard">${item[0]}</a></p>`;
    }
    winsLineBox.appendChild(commanderNameBox);
    let winsNumberBox = document.createElement("div"); //tworzymy diva z ilością winów danego commandera
    winsNumberBox.setAttribute("class", "wins");
    winsNumberBox.innerHTML = `<p>${item[1]} ${inflection(item[1])} <span>(${(Math.round(item[1] / totalWins * 1000) / 10)}%)</span></p>`;
    winsLineBox.appendChild(winsNumberBox);
    commanderBox.appendChild(winsLineBox);
  });
  return commanderBox;
};

const zydImg = `<img src="./resources/images/Krzesełko.png" alt="zydelion">`; //kod obrazka
var createZydelionImages = zydNum =>
  zydNum <= 3 ? zydImg.repeat(zydNum) : `<p>` + zydNum + `x</p>` + zydImg; //funkcja która liczy, ile ma być obrazków - jak mało to tyle obrazków, jak dużo to liczba i obrazek

function createRanking(players) {
  let playersForRanking = [...players];
  let fullRanking = document.getElementById("ranklist"); //właściwy ranking
  let rankBoxes = document.createDocumentFragment(); //fragment do złożenia pełnego rankingu w całość
  playersForRanking.map(function(item, index) {
    let rankBox = document.createElement("div"); //konfigurujemy pojedynczy div rankingu
    rankBox.setAttribute("class", "rank");
    let numberBox = document.createElement("div"); //dodajemy div z numerem miejsca
    numberBox.setAttribute("class", "number");
    numberBox.innerHTML = `<p>${item.rank}</p>`;
    rankBox.appendChild(numberBox);
    let nameBox = document.createElement("div"); //dodajemy div z imieniem gracza
    nameBox.setAttribute("class", "name");
    nameBox.innerHTML = `<div><p>${playersForRanking[index].name}</p></div>`;
    let zydelionBox = document.createElement("div"); //do diva z imieniem dodajemy div z obrazkami zydeliona
    zydelionBox.setAttribute("class", "zydnum");
    zydelionBox.innerHTML = `${createZydelionImages(playersForRanking[index].zydelion)}`;
    nameBox.appendChild(zydelionBox);
    rankBox.appendChild(nameBox);
    let expandBox = document.createElement("button"); //dodajemy przycisk do rozwijania listy rozwijanej commanderów
    expandBox.setAttribute("class", "collapsible");
    expandBox.innerHTML = '<p class="expand">▼</p>';
    rankBox.appendChild(expandBox);
    rankBox.appendChild(createCommanderInfo(players[index].commander, totalWin(index, playersForRanking))); //dodajemy rozwijaną listę commanderów
    rankBoxes.appendChild(rankBox); //wszystko wsadzamy w ranking
  });
  fullRanking.appendChild(rankBoxes); //dodajemy fragment zawierający pełny ranking do własciwego rankingu (performance!)
}
createRanking(rankedPlayers);

var collapsible = document.getElementsByClassName("collapsible"); //kod listy rozwijanej
for (let i = 0; i < collapsible.length; i++) {
  collapsible[i].addEventListener("click", function() {
    let activeCollapsible = document.querySelector(".active");
    if (activeCollapsible !== null && activeCollapsible != this) { //resetujemy już rozwiniętą listę (żeby tylko 1 była rozwinięta na raz)
      activeCollapsible.nextElementSibling.style.display = "none";
      activeCollapsible.firstElementChild.textContent = "▼";
      activeCollapsible.classList.remove("active");
    }
    let content = this.nextElementSibling;
    if (content.style.display === "flex") { //jeśli lista jest rozwinięta to zwijamy
      content.style.display = "none";
      this.firstElementChild.textContent = "▼";
      this.classList.remove("active");
    } else { // jeśli lista jest zwinięta, to rozwijamy
      content.style.display = "flex";
      this.firstElementChild.textContent = "▲";
      this.classList.add("active");
    }
  });
};
