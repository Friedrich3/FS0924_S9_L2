import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fantasyBooks from "../data/fantasy.json"; //array preso da data

const AllTheBooks = function () {
  return (
    <>
      <h1 className=" text-center fw-bolder">Welcome to EpiBooks!</h1>
      <main className="py-3">
        <Container>
          <Row className="row-cols-5 gy-4">
            {fantasyBooks.map((book) => {
              return (
                <Col key={book.asin}>
                  <Card className=" border">
                    <Card.Img
                      variant="top"
                      src={book.img}
                      alt="Book Cover"
                      style={{ height: "20rem" }}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price}$</Card.Text>
                      <Button className=" bg-success border-0">Buy Now!</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default AllTheBooks;
