import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GlobalContext } from "../Context/context";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(GlobalContext);

  const login = () => {
    const userdetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log(userdetails);

    if (email == userdetails.email && password == userdetails.password) {
      dispatch({
        type: "LOGIN",
        payload: { email, password },
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully logged in!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credientials",
        text: "Please enter correct email/password",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container fluid style={loginContainerStyle}>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={6}>
          <h2 className="text-center">Welcome to 2HR.</h2>
          <h4 className="text-center">Login</h4>
          <h5 className="text-center">
            Enter your credentials below to securely log in to your account.
          </h5>
          
        </Col>
        <Col md={6} className="text-center">
          <img
          <Form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "300px" }}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: "30px",  backgroundColor:'#f8f9fa' }}
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: "300px" }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ height: "30px" , backgroundColor:'#f8f9fa'}}
            />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{ width: "300px" }}>
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        
          <Button variant="dark" onClick={login} style={{ borderRadius: "10px", marginTop: "10px", width: "200px" }}>
            Login
          </Button>
        </Form>  src="public/Images/undraw_Login_re_4vu2.png"
            alt="login Image"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

const loginContainerStyle = {
  backgroundColor: "#d2b48c",
};

export default LoginPage;
