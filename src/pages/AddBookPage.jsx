import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbookDetail } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const AddBookPage = () => {
  const [formData, setFormData] = useState({ title: '', author: '', description: '', genre: '', publication_year: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.genre || !formData.publication_year || !formData.description) {
      alert('All fields are required!');
      return;
    }

    const newBook = {
      id: Date.now(), // Unique ID
      title: formData.title,
      author: formData.author,
      description: formData.description,
      genre: formData.genre.split(', ').map(g => g.trim()), // Convert genre string to array
      publication_year: parseInt(formData.publication_year, 10),
      cover_image: "https://fakeimg.pl/667x1000/cc6600" // Placeholder image
    };

    dispatch(addbookDetail(newBook));

    // Navigate to the first genre in the list
    navigate(`/books/${newBook.genre[0]}`);
  };

  return (
    <div className="add-wrapper">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className='add-book'>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Publication Year"
          value={formData.publication_year}
          onChange={(e) => setFormData({ ...formData, publication_year: e.target.value })}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
