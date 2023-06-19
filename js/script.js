const list = ['Latte','Biscotti','Cereali','Fette biscottate','Nutella', 'Miele'];

const spesa = document.getElementById('spesa');

let j = 0
while (j < list.length) {
   console.log('Prodotto', list[j]);

   const newLi = document.createElement('li');
   
   spesa.append(newLi);
    
   newLi.innerHTML = list[j];

    j++;  
} 