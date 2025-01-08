import { Navbar, Container, Nav, } from "react-bootstrap";

const MyNav = function () {
  return (
    <header>
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid className=" mx-5">
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default MyNav;
