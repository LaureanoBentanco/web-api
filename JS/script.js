



fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(datos => mostrardatos(datos))
            .catch(error =>console.log(error));
                
                
             const mostrardatos= (datos)=>{
                    console.log(datos)
                    let div = '';

                    for (const dato of datos) {
                        div += `<div> <img class='img'src="${dato.image}" alt="Imagen ilustrativa"></div>`
                    }
                    document.getElementById('app').innerHTML = div;
             }

