
const main = document.querySelector('main');


async function getData(){
    const res  = await  fetch('https://fakestoreapi.com/products')
    const datos = await res.json();
    datos.forEach(dato=>{
        
	const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = dato. image
    const desc = document.createElement('div');
    desc.textContent = dato.description
    desc.className = 'desc';
    const price = document.createElement('div');
    price.textContent = dato.price;
    price.className = price;

    card.append(img, desc, price);
    main.appendChild(card);
	
    });
}
getData()
