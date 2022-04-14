import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styles.scss"

const Shop = () => {
    const { products } = useContext(ProductsContext);
    console.log("prods--", products);
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product}></ProductCard>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
