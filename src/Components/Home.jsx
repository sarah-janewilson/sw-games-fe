import Card from "react-bootstrap/Card";

function Home() {
  return (
    <section className="home-card-container">
      <h2>Welcome to SW Games!</h2>
      <p>Discover and engage with the latest game reviews, ratings, and discussions.</p>
      <Card className="home-card">
        <Card.Body>
          <Card.Title> <a href="/reviews">See all reviews</a></Card.Title>
        </Card.Body>
      </Card>
      <Card className="home-card">
        <Card.Body>
          <Card.Title> <a href="/categories">See all categories</a></Card.Title>
        </Card.Body>
      </Card>
      <Card className="home-card">
        <Card.Body>
          <Card.Title>Be part of the conversation! Share your thoughts by voting and commenting on game reviews.</Card.Title>
          <Card.Text> <a href="/users">Login</a> to get started</Card.Text>
        </Card.Body>
      </Card>
  </section>
  );
}

export default Home;