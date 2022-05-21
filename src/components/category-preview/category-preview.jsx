import ProductCard from "../product-card/product-card";
import "./category-preview.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <Link to={title} className="category-preview-container">
      <h2>
        <span className="title"> {title.toUpperCase()} </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Link>
  );
};

export default CategoryPreview;
