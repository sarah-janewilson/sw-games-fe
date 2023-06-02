import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ReviewList from "./Components/ReviewList";
import SingleReview from "./Components/SingleReview";
import CategoryList from "./Components/CategoryList";
import UserList from "./Components/UserList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Nav loggedInUser={loggedInUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
        <Route
          path="/reviews/:review_id"
          element={<SingleReview loggedInUser={loggedInUser} />}
        ></Route>
        <Route path="/categories" element={<CategoryList />}></Route>
        <Route
          path="/users"
          element={
            <UserList
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
