import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <article className="category-card-container">
      <Card className="category-card">
        <Card.Body>
          <Card.Title>Category: {category.slug}</Card.Title>
          <Card.Text>{category.description}</Card.Text>
          <Link to={`/reviews?category=${category.slug}`}>
            View all {category.slug} games
          </Link>
        </Card.Body>
      </Card>
    </article>
  );
}

export default CategoryCard;
