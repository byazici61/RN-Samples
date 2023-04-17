import { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
  category: string;
  discountPercentage: number;
  rating: number;
  description: string;
};

type UseProductsResult = {
  products: Product[];
  productInfo: {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
    category: string;
    discountPercentage: number;
    rating: number;
    description: string;
  }[];
  categories: string[];
};

const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInfo, setProductInfo] = useState<UseProductsResult['productInfo']>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products');
        setProducts(response.data.products);
        const infoArray = response.data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          brand: product.brand,
          thumbnail: product.thumbnail,
          category: product.category,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          description: product.description,
        }));

        // infoArray.forEach(element => {
        //   if(!categories.includes(element.category)){
        //     categories.push(element.category);
        //   }

        // });

        setProductInfo(infoArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { products, productInfo, categories };

};

export default useProducts;
