import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Books from "./components/Book/Books";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import AboutUs from "./components/AboutUs";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
