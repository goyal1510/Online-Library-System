import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../index.css";

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.bookDetails.find((b) => b.id === parseInt(id)));

  if (!book) return <p className='not-found'>Book not found!</p>;

  return (
    <div className="wrapper">
      <h1>{book.title}</h1>
      <img src={book.cover_image} alt="" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <p><strong>Genre:</strong> {book.genre[0]}, {book.genre[1]}</p>
      
      <Link to={`/books/${book.genre[0]}`} className='link'>Back to BROWSER</Link>
    </div>
  );
};

export default BookDetailsPage;

