import { Button, } from "react-bootstrap";
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
              {/* <Button className="mx-1 btn-secondary" onClick={()=> this.changeState(fantasy)}>Fantasy</Button>  SOTTO MESSO CON UNA FUNZIONE ESTERNA MA PREFERIBILMENTE SI USA LA FUNZIONE FRECCIA*/}
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:fantasy})}>Fantasy</Button>     
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:history})}>History</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:horror})}>Horror</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:romance})}>Romance</Button>
              <Button className="mx-1 btn-secondary" onClick={()=> this.setState({activeCategory:scifi})}>Scifi</Button>
            </ListGroup>
          </div>
              <BookList listaLibri={this.state.activeCategory}/>
        </main>
      </>
    );
  }
}


export default AllTheBooksClass;
