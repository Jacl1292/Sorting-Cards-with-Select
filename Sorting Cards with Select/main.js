function generateCards() {
    var numCards = document.getElementById("numCards").value;
    var cardsContainer = document.getElementById("cardsContainer");
    var logContainer = document.getElementById("logContainer");
  
    cardsContainer.innerHTML = "";
    logContainer.innerHTML = "";
  
    var suits = ["♦", "♥", "♠", "♣"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  
    for (var i = 0; i < numCards; i++) {
      var randomSuit = suits[Math.floor(Math.random() * suits.length)];
      var randomValue = values[Math.floor(Math.random() * values.length)];
  
      var card = document.createElement("div");
      card.className = "card"; 

      var pals = document.createElement("div");
      pals.className = "palosuperior";
      var numero = document.createElement("div");
      numero.className = "numero";
      numero.id = "numero";
      var pali = document.createElement("div");
      pali.className = "paloinferior";
     
      pals.innerHTML = randomSuit;
      numero.innerHTML = randomValue;
      pali.innerHTML = randomSuit;
      
      card.appendChild(pals);
      card.appendChild(numero);
      card.appendChild(pali);
  
      cardsContainer.appendChild(card);
    }
  }
  
  function sortCards() {
    var cardsContainer = document.getElementById("cardsContainer");
    var cards = Array.from(cardsContainer.children);
    var logContainer = document.getElementById("logContainer");
    logContainer.innerHTML = "";
  
    const selectSort = (arr) => {
      let min = 0;
      while (min < arr.length - 1) {
        for (let i = min + 1; i < arr.length; i++) {
          if (arr[min].querySelector(".numero").innerHTML > arr[i].querySelector(".numero").innerHTML) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }
        showCycle(arr); // Mostrar el ciclo actual antes de continuar
        min++;
      }
    }; 
    const showCycle = (arr) => { 
      var cycleContainer = document.createElement("div");
      cycleContainer.className = "cycle";
      for (var i = 0; i < arr.length; i++) {
        var log = document.createElement("div");
        log.className = "card";
        log.innerHTML = arr[i].innerHTML;
        cycleContainer.appendChild(log);
      }
      logContainer.appendChild(cycleContainer);
    };
    selectSort(cards);
  }