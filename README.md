# Online Library System

A full-featured online library system built with React, Redux, and React Router. This application allows users to browse, add, and view book details.

## Features

1. **Browse Books**: View books by category.
2. **Add Book**: Add new books to the library.
3. **View Book Details**: See detailed information about each book.
4. **Search Books**: Search for books by title or author.
5. **Static Data**: Uses a predefined set of books instead of fetching from an API.

---

## Project Structure

Online-Library-System
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
| ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── BrowseBooksPage.jsx
│ │ ├── AddBookPage.jsx
│ │ ├── BookDetailsPage.jsx
│ │ ├── NotFoundPage.jsx
│ ├── redux/
│ │ ├── booksSlice.js
| | ├── store.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js

## Installation and Setup

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/goyal1510/Online-Library-System.git
cd Online-Library-System
```

### 2. Install Dependencies
Ensure that you have [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 3. Start the Development Server
Run the app in development mode:
```bash
npm run dev
```

The app will be live at [http://localhost:5173](http://localhost:5173).

## Technologies Used

- **React**: For building the UI components.
- **Redux**: For state management.
- **React Router**: For navigation.
- **CSS**: For styling the application.
- **JavaScript**: For functionality.

