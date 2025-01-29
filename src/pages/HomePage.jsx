import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../index.css";

const HomePage = () => {
  const categories = useSelector((state) => state.books.categories);

  return (
    <div className="wrapper">
      <h1>Welcome to the Online Library</h1>
      <p>Select a category to explore books:</p>
      <ul className="book-list">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
