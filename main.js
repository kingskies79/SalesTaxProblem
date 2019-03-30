
 calcolaTasse = function (quantità,item,prezzo,type,tasse,totale) {
  this.quantità = quantità;
  this.item = item;
  this.type = type;
  this.prezzo = prezzo; 
  this.prezzoTassaInclusa = this.prezzoTassaInclusa()
  this.tasse = this.tasseTot();
  this.totale = this.totale();
}

calcolaTasse.prototype.prezzoTassaInclusa = function (prezzo) {
   
 prezzoFinale = []
 console.log('\n ****************Input**************** \n');
    for (var i = 0; i < this.item.length; i++) {
      var tasse = 0
    if (this.item[i] === 'book' || this.item[i] === 'chocolate bar' || this.item[i] === 'box of chocolates' || this.item[i] === 'headache pills'  || this.item[i] === 'packet of headache') {
        
        tasse = 0;}
    else {tasse +=  0.10}
    if (this.type[i] === 'imported') {
      tasse += .05
    }
    
     console.log(this.type[i] +' '+ this.quantità[i] +' '+ this.item[i] + ' at ' + this.prezzo[i].toFixed(2)   );
    prezzoFinale.push(this.prezzo[i] * this.quantità[i] + this.prezzo[i] * tasse);
      
    
  }
  return prezzoFinale;
  
}

calcolaTasse.prototype.tasseTot = function (item,prezzo) {
  
 var tasse = 0;

var prezzoTassaInclusa = this.prezzoTassaInclusa

for (var i = 0; i < this.prezzo.length; i++) {
  tasse += prezzoTassaInclusa[i] - this.prezzo[i] * this.quantità[i];
 
}
 return tasse;
}

calcolaTasse.prototype.totale = function (item,prezzo,tasse) {
  var totale = 0;
  var prezzoTassaInclusa = this.prezzoTassaInclusa
  for (var i = 0; i < this.prezzo.length; i++) {
    totale += this.prezzoTassaInclusa[i]
  }
  
  return totale;
}

function ricevuta(quantità,descrizione,prezzo,type) {
 var ricevuta = new calcolaTasse(quantità,descrizione,prezzo,type)
 var articles = []
 for (var i = 0; i < ricevuta.item.length; i++) {
   articles.push(ricevuta.type[i] +' ' + ricevuta.quantità[i] + ' ' + ricevuta.item[i] + ': ' + ricevuta.prezzoTassaInclusa[i] + ' ')
   
 }
 articles.tassaVendita = ricevuta.tasse.toFixed(2);
 articles.totale = ricevuta.totale.toFixed(2);
 
console.log('\n ****************Output**************** \n');
 console.log(articles);
 return articles;
}


ricevuta([2,1,1],['book','music CD','chocolate bar'],[12.49,14.99,0.85],['','','']);

ricevuta([1,1],['box of chocolates','bottle of perfume'],[10.0,47.50],['imported','imported']);

ricevuta([1,1,1,3],['bottle of perfume','bottle of perfume','packet of headache','box of chocolates'],[27.99,18.99,9.75,11.25],['imported','','','imported']);

module.exports= {ricevuta}