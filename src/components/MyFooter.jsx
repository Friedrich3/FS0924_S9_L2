import { Col, Container, Row } from "react-bootstrap"

const MyFooter = function (){
    return(
        <footer>
        <Container fluid className=" bg-dark">
            <Row className=" text-secondary text-center py-2">
                <Col className="col-3">Link 1</Col>
                <Col className="col-3">Link 2</Col>
                <Col className="col-3">Link 3</Col>
                <Col className="col-3">Link 4</Col>
            </Row>
            <Row className="py-1">
                <Col className="text-center text-secondary"><p>&copy; Epibooks@React.com</p></Col>
            </Row>
        </Container>
        </footer>
    )
}

export default MyFooter