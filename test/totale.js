
const {ricevuta} = require('../main.js')
let assert = require('assert');
describe('Testing about total', function() {
     describe('Totale', function() {
    it('Confronta il prezzo incluso di tasse', function() {
                
               assert.equal(ricevuta([2],['book'],[12.49],['']).totale, 24.98);
           
        })
       
    });
   
});