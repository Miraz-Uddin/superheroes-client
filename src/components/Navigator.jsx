import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className="px-3 btn" to={`/`}>
              Home
            </Link>
            <Link className="px-3 btn" to={`/superheroes`}>
              Traditional Super Heroes
            </Link>
            <Link className="px-3 btn" to={`/rq-superheroes`}>
              RQ Super Heroes
            </Link>
            <Link className="px-3 btn" to={`/rq-parallel`}>
              RQ Parallel
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;
