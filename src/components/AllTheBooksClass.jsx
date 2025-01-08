import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";

class AllTheBooks extends Component {

  state = {
    activeCategory: fantasy,
  };
  
  changeState = function(parameter){
    this.setState({
      activeCategory: parameter
    })
  }
 
  

  render() {
    
    return (
      <>
        <h1 className=" text-center fw-bolder">Welcome to EpiBooks!</h1>
        <main className="py-3">
          <div className="pb-4">
            <ListGroup
              horizontal
              className=" justify-content-center text-center"
            >
              {/* <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:fantasy})}>Fantasy</Button>  SOTTO MESSO CON UNA FUNZIONE ESTERNA MA PREFERIBILMENTE SI USA LA FUNZIONE FRECCIA  */}  
              <Button className="mx-1 btn-secondary" onClick={()=> this.changeState(fantasy)}>Fantasy</Button> 
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:history})}>History</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:horror})}>Horror</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:romance})}>Romance</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:scifi})}>Scifi</Button>
            </ListGroup>
          </div>
          <Container>
            <Row className="row-cols-3 row-cols-md-4 row-cols-lg-5 gy-4">
              {this.state.activeCategory.map((book) => {
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
                        <Button className=" bg-success border-0">
                          Buy Now!
                        </Button>
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
  }
}


export default AllTheBooks;
