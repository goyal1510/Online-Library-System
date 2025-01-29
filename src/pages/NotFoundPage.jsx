import { Link } from 'react-router-dom';
import "../index.css";

const NotFoundPage = () => (
  <div className="wrapper not-found">
    <h1>404 - Page Not Found</h1>
    <Link to="/" className='link2'>Back to Home</Link>
  </div>
);

export default NotFoundPage;