
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
        <Col md={5}>
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
        
      </Row>
    </Container>
  );
}

const loginContainerStyle = {
  backgroundColor: 'white',
};
<section class="py-12 py-sm-24 py-md-32 position-relative overflow-hidden"><img class="position-absolute top-0 end-0" src="flaro-assets/images/newsletter/gradient2.svg" alt=""/>
  <div class="container position-relative">
    <div class="mw-xl mx-auto text-center">
      <div class="position-relative d-flex mx-auto mb-6 align-items-center justify-content-center fs-5 text-white fw-bold bg-primary rounded-pill" style="width: 70px; height: 70px;"><img class="position-absolute top-0 start-0" src="flaro-assets/images/how-it-works/gradient.svg" alt=""/>
        <svg width="32" height="26" viewbox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.00098 6.3335L14.152 15.1008C15.2716 15.8473 16.7303 15.8473 17.85 15.1008L31.001 6.3335M4.33431 24.6668H27.6676C29.5086 24.6668 31.001 23.1744 31.001 21.3335V4.66683C31.001 2.82588 29.5086 1.3335 27.6676 1.3335H4.33431C2.49336 1.3335 1.00098 2.82588 1.00098 4.66683V21.3335C1.00098 23.1744 2.49336 24.6668 4.33431 24.6668Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <h3 class="mb-3" >Join Our Newsletter</h3>
      <p class="mw-md mx-auto mb-10 text-secondary" >Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
      <form action="">
        <input class="form-control text-center mb-5" type="text" placeholder="First &amp; last name"/>
        <input class="form-control text-center mb-5" type="text" placeholder="Email address"/>
        <button class="btn mb-8 w-100 btn-primary shadow" type="submit" >Subscribe Now</button>
        <div class="d-flex align-items-center justify-content-center">
          <svg width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00033 9.00024V10.3336M3.00033 13.0002H11.0003C11.7367 13.0002 12.3337 12.4033 12.3337 11.6669V7.66691C12.3337 6.93053 11.7367 6.33358 11.0003 6.33358H3.00033C2.26395 6.33358 1.66699 6.93053 1.66699 7.66691V11.6669C1.66699 12.4033 2.26395 13.0002 3.00033 13.0002ZM9.66699 6.33358V3.66691C9.66699 2.19415 8.47308 1.00024 7.00033 1.00024C5.52757 1.00024 4.33366 2.19415 4.33366 3.66691V6.33358H9.66699Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round"></path>
          </svg><span class="ms-2 fs-9 text-secondary" >We never share your information to any third party</span>
        </div>
      </form>
    </div>
  </div>
</section>

export default SignupPage;

