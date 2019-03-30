# SalesTaxProblem

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

Write an application that prints out the receipt details for these shopping baskets...



### INPUT:

*Input 1*:
>1 book at 12.49  
>1 music CD at 14.99  
>1 chocolate bar at 0.85  

*Input 2*:
>1 imported box of chocolates at 10.00  
>1 imported bottle of perfume at 47.50  

*Input 3*:
>1 imported bottle of perfume at 27.99  
>1 bottle of perfume at 18.99  
>1 packet of headache pills at 9.75  
>1 box of imported chocolates at 11.25  

### OUTPUT

*Output 1*:
>1 book : 12.49  
>1 music CD: 16.49  
>1 chocolate bar: 0.85  
>Sales Taxes: 1.50  
>Total: 29.83  

*Output 2*:
>1 imported box of chocolates: 10.50  
>1 imported bottle of perfume: 54.65  
>Sales Taxes: 7.65  
>Total: 65.15  

*Output 3*:
>1 imported bottle of perfume: 32.19  
>1 bottle of perfume: 20.89  
>1 packet of headache pills: 9.75  
>1 imported box of chocolates: 11.85  
>Sales Taxes: 6.70  
>Total: 74.68 

### Mocha test
npm test. 

### How to Run
`node main.js  


### Input Data
>For any input I call the function ricevuta with the parameters

>-quantità
>-descrizione
>-prezzo
>-type 

example
>ricevuta([2,1,1],['book','music CD','chocolate bar'],[12.49,14.99,0.85],['','','']);
				quantità     descrizione												prezzo						type

### CalcolaTasse

> Inside the ricevuta function build an instance of calcolaTasse(quantità,item,prezzo,type,tasse,totale),where initialize the local attribute
>this.quantità = quantità;
>this.item = item;
>this.type = type;
>this.prezzo = prezzo; 
>this.prezzoTassaInclusa = this.prezzoTassaInclusa()
>this.tasse = this.tasseTot();
>this.totale = this.totale();

### prezzoTassaInclusa
return the price with the tax and print the input value.

### tasseTot
return the value of the total sales tax

### totale
return the total with the tax

### ricevuta
return the total tax and the total in output

### Review
>I broke the application into 4 major components:
>ricevuta where receive the input article and return the output article.
>calcolaTasse initialize the variable and calculate tasseTot and totale
>tasseTot return the tax
>totale return totale.
