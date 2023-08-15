import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi)=>{
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        const description = await fetchData(`${urlApi}/description/${product.description.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name );
        console.log(product.description);
    }catch (error){
        console.error(error);

    }
}


anotherFunction(API)