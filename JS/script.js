
const main = document.querySelector('main');


async function getData(){

    const res  = await  fetch('https://fakestoreapi.com/products');
    const datos = await res.json();
    mostrardatos(datos);

}


function mostrardatos(datos){

    datos.forEach(dato=>{
       
        console.log(datos);
  
	const card = document.createElement('div');
    card.className = 'card';
    
    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = dato.title;
    
    const img = document.createElement('img');
    img.src = dato. image

    //const desc = document.createElement('div');
    //desc.textContent = dato.description
    //desc.className = 'desc';
    
    const price = document.createElement('h3');
    price.textContent = dato.price;
    price.className = price;

    const buttons = document.createElement('div');
    buttons.className = 'buttons';
  

    const verDetalle = document.createElement('button')
    verDetalle.type = 'button';
    verDetalle.innerText = "Ver Detalle";
    verDetalle.className = 'verDetalle';
    const miCarrito = document.createElement('button');
    miCarrito.type = 'button';
    miCarrito.innerText = 'Agregar al Carrito';
    miCarrito.className = 'miCarrito';

    buttons.appendChild(verDetalle);  
    buttons.appendChild(miCarrito);  
    card.append( img, title, price, buttons);
    main.appendChild(card);
    
    });
        
}

getData()
