import { Button, Container, Form } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ListGroup from "react-bootstrap/ListGroup";
import { Component } from "react";
import BookList from "./BookList";

class AllTheBooksClass extends Component {
  state = {
    activeCategory: {
      categoria: fantasy,
    },
    searchInput: {
      research: "",
    },
  };

  changeState = function (parameter) {
    this.setState({
      activeCategory: parameter,
    });
  };

  checkResearch = function () {
    if (this.state.searchInput.research === "") {
      return this.state.activeCategory.categoria;
    } else {
      const arrayfiltrato = this.state.activeCategory.categoria.filter(
        (libro) =>
          libro.title.toLowerCase().includes(this.state.searchInput.research)
      );
      return arrayfiltrato;
    }
  };

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
              {/* <Button className="mx-1 btn-secondary" onClick={()=> this.changeState(fantasy)}>Fantasy</Button>  SOTTO MESSO CON UNA FUNZIONE ESTERNA MA PREFERIBILMENTE SI USA LA FUNZIONE FRECCIA*/}
              <Button
                className="mx-1 btn-secondary"
                onClick={() =>
                  this.setState({
                    activeCategory: { categoria: fantasy },
                    searchInput: { research: ""},
                  })
                }
              >
                Fantasy
              </Button>
              <Button
                className="mx-1 btn-secondary"
                onClick={() =>
                  this.setState({
                    activeCategory: {
                      categoria: history,
                    },
                    searchInput: { research: "" },
                  })
                }
              >
                History
              </Button>
              <Button
                className="mx-1 btn-secondary"
                onClick={() =>
                  this.setState({
                    activeCategory: {
                      categoria: horror,
                    },
                    searchInput: { research: "" },
                  })
                }
              >
                Horror
              </Button>
              <Button
                className="mx-1 btn-secondary"
                onClick={() =>
                  this.setState({
                    activeCategory: {
                      categoria: romance,
                    },
                    searchInput: { research: "" },
                  })
                }
              >
                Romance
              </Button>
              <Button
                className="mx-1 btn-secondary"
                onClick={() =>
                  this.setState({
                    activeCategory: {
                      categoria: scifi,
                    },
                    searchInput: { research: "" },
                  })
                }
              >
                Scifi
              </Button>
            </ListGroup>
            <Container className="pt-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Search your book..."
                    value={this.state.searchInput.research}
                    onChange={(event) => {
                      this.setState({
                        searchInput: { research: event.target.value },
                      });
                    }}
                  />
                </Form.Group>
              </Form>
            </Container>
            {/* se il formValue e' vuoto fai listaLibri deve essere la active category altrimenti deve essere il risultato del filtro di active category */}
          </div>
          {/* {this.checkResearch()} NON BISOGNA INVOCARE UNA FUNZIONE ALL'INTERNO DI RENDER CHE VA A MODIFICARELO STATO POICHE IL CAMBIO DI STATO RICHIAMA A RENDER        FIXED POST DEBRIEF*/}
          <BookList listaLibri={this.checkResearch()} />
        </main>
      </>
    );
  }
}

export default AllTheBooksClass;
