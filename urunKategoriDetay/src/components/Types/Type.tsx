export type Product = {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
    category: string;
  };
 export type ProductListProps = {
    allProducts: Product[];
    favoriteProducts: Product[];
    setFavoriteProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
    setAllProducts?: React.Dispatch<React.SetStateAction<Product[]>>;
  };