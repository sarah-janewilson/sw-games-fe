import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import UserCard from "./UserCard";

function UserList({ loggedInUser, setLoggedInUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => {
      setCurrentUsers(users);
      setIsLoading(false);
    });
  }, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>All users</h2>
      {loggedInUser && <p>You are logged in as {loggedInUser.username}.</p>}
      <ul className="user-list">
        {currentUsers.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              handleLogin={handleLogin}
              loggedInUser={loggedInUser}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default UserList;
