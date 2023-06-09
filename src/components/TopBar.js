import Navbar from "react-bootstrap/Navbar";

function Top() {
  return (
    <Navbar style={{ backgroundColor: "rgb(19, 47, 76)", color: "white" }}>
      <Navbar.Brand
        className="ms-4 secondary"
        style={{ color: "rgb(102, 178, 255)" }}
      >
        Share your space
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end me-4">
        <Navbar.Text>
          Signed in as: <a href="#login">Username</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Top;
