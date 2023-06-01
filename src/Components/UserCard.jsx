import Card from "react-bootstrap/Card";

function UserCard({ user, handleLogin, loggedInUser }) {
  const handleButtonClick = () => {
    handleLogin(user);
  };
  return (
    <article className="user-card-container">
      <Card className="user-card">
        <Card.Img
          className="user-img"
          variant="top"
          src={user.avatar_url}
          alt={`Avatar image for ${user.username}.`}
        />
        <Card.Body>
          <Card.Title>Username: {user.username}</Card.Title>
          {loggedInUser && loggedInUser.username === user.username ? (
            <p>You are logged in as {loggedInUser.username}.</p>
          ) : (
            <button onClick={handleButtonClick}>
              Log in as {user.username}
            </button>
          )}
        </Card.Body>
      </Card>
    </article>
  );
}

export default UserCard;
