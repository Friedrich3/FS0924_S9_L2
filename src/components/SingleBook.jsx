/* eslint-disable react/prop-types */
import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Col>
          <Card className=" border">
            <Card.Img
              variant="top"
              src={this.props.singleBook.img}
              alt="Book Cover"
              style={{ height: "20rem" }}
            />
            <Card.Body>
              <Card.Title>{this.props.singleBook.title}</Card.Title>
              <Card.Text>{this.props.singleBook.price}$</Card.Text>
              <Button className=" bg-success border-0">Select the Book</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
