/* eslint-disable react/prop-types */
import {Container, Row } from 'react-bootstrap'
import SingleBook from "./SingleBook";



const BookList = function(props){
    return(
        <>
        
        <Container>
            <Row className="row-cols-3 row-cols-md-4 row-cols-lg-5 gy-4">
              {props.listaLibri.map((book) => {
                return (
                  <SingleBook key={book.asin} singleBook={book} />
                );
              })}
            </Row>
          </Container>
        </>
    )
}

export default BookList