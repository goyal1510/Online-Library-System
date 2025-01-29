import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
