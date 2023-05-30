import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList";
import SingleReview from "./Components/SingleReview";
import CategoryList from "./Components/CategoryList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        <Route path="/categories" element={<CategoryList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
