import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Alert, Button, Form } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [errors, setErrors] = useState([
    { text: "Enter a valid Email address", isError: false },
    {
      text: "Password must contain at least 6 characters, 1 capital and 1 number",
      isError: false,
    },
  ]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = [...errors];

    setError("");
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors[0].isError = true;
      setErrors(newErrors);
    } else {
      newErrors[0].isError = false;
      setErrors(newErrors);
    }
    if (
      user.password.length < 6 ||
      !/\p{Lu}/u.test(user.password) ||
      !/\d/.test(user.password)
    ) {
      newErrors[1].isError = true;
      setErrors(newErrors);
    } else {
      newErrors[1].isError = false;
      setErrors(newErrors);
    }
    if (errors[0].isError || errors[1].isError) {
      return;
    }
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    <div>
      <Form className="registerForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Alert variant="danger" show={errors[0].isError}>
            {errors[0].text}
          </Alert>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Alert className="Alert" show={errors[1].isError} variant="danger">
            {errors[1].text}
          </Alert>
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
      <p>
        Already have an Account?
        <Link to="/login">Login</Link>
      </p>
      <Alert className="Alert" show={error} variant="danger">
        {error}
      </Alert>
    </div>
  );
};

export default Register;
