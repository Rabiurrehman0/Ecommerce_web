
import Swal from 'sweetalert2';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';


function SignupPage() {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");

  const signUp = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'You have successfully signed up!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    })
    .then(() => {
      const payload = {
        username : firstName + " " + lastName,
        email,
        password,
      }
      // console.log(payload)

      localStorage.setItem('userDetails', JSON.stringify(payload))
   
    });
  };

  return (
    <Container fluid style={loginContainerStyle}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <h2 className="text-center">Welcome to 2HR.</h2>
          <h4 className="text-center">Sign Up</h4>
          <h5 className="text-center">Get ready to shop till you drop! Sign up now and access a wide selection of products just for you.</h5>
          <Form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <Row className="mb-3">
    <Col xs={12} sm={6}>
      <Form.Label className="mb-2">First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter First Name"
        style={{ backgroundColor: "#f8f9fa", height: "30px" }}
      />
    </Col>
    <Col xs={12} sm={6}>
      <Form.Label className="mb-2">Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Last Name"
        style={{ backgroundColor: "#f8f9fa", height: "30px" }}
      />
    </Col>
  </Row>
  <Row className="mb-3">
    <Col xs={12} sm={6}>
      <Form.Label className="mb-2">Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter Email"
        style={{ backgroundColor: "#f8f9fa", height: "30px" }}
      />
    </Col>
    <Col xs={12} sm={6}>
      <Form.Label className="mb-2">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter Password"
        style={{ backgroundColor: "#f8f9fa", height: "30px" }}
      />
    </Col>
  </Row>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="dark" onClick={signUp} className="btn-rounded">
    Sign Up
  </Button>
</Form>
        </Col>
        <Col md={18}>
          <img
            src="public/Images/WhatsApp Image 2023-06-26 at 08.34.26.jpg"
            alt="signup Image"
            style={{ maxWidth: '50%', maxHeight: '50%',borderRadius:'100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

const loginContainerStyle = {
  backgroundColor: '#faf2e8',
};

export default SignupPage;

