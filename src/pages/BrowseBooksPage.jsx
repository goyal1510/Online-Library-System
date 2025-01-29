import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "../index.css";

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.bookDetails);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.genre.includes(category) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="wrapper">
      <h1>Books in {category}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className='book-browse-list'>
            <img src={book.cover_image} alt="" />
            {book.title}
            <Link to={`/book/${book.id}`}>
            <br />
            View More Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooksPage;
