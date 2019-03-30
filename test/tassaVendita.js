const {ricevuta} = require('../main.js')
let assert = require('assert');
describe('Testing about tax', function() {
     describe('Tassa Vendita', function() {
    it('Confronta il valore delle tasse', function() {
                
               assert.equal(ricevuta([1],['bottle of perfume'],[27.99],['imported']).tassaVendita, 4.198499999999999);
           
        })
       
    });
   
});