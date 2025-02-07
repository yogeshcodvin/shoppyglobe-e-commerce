// custom hook useProoduct

import { useState, useEffect } from "react";

export function useProduct(){
    const [products, setproducts] = useState([]);
    const [isLoading, setisLoading]  = useState(true);
    const [error , seterror]  = useState(null);

    useEffect(()=> {

        const fetchproducts = async () =>{

            console.log("Fetching Products...")

        try{

        const response = await fetch('https://dummyjson.com/products');
        

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json()

        setproducts(data.products);
        }

        catch (error)
        {
            seterror(error);
        }
        finally
        {
        setisLoading(false);
        }

        }

        fetchproducts();

    },[])

    return {products, isLoading, error} 
}

