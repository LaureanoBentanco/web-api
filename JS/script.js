
const main = document.querySelector('main');


async function getData(){
    const res  = await  fetch('https://fakestoreapi.com/products')
    const datos = await res.json();
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

    card.append( img, title, price);
    main.appendChild(card);
	
    });
}
getData()
