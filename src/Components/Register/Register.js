import { React, useState, useRef } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([
    { text: "Ingrese un Email válido", isError: false },
    {
      text: "Password debe contener al menos 6 caracteres, una mayuscula y un numero",
      isError: false,
    },
  ]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerHandler = () => {
    const newErrors = [...errors];

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailRef.current.focus();
      emailRef.current.style.borderColor = "red";
      newErrors[0].isError = true;
      setErrors(newErrors);
    } else {
      emailRef.current.style.borderColor = "";
      newErrors[0].isError = false;
      setErrors(newErrors);
    }

    if (
      passwordRef.current.value.length < 6 ||
      !/\p{Lu}/u.test(passwordRef.current.value) ||
      !/\d/.test(passwordRef.current.value)
    ) {
      passwordRef.current.focus();
      passwordRef.current.style.borderColor = "red";
      newErrors[1].isError = true;
      setErrors(newErrors);
    } else {
      passwordRef.current.style.borderColor = "";
      newErrors[1].isError = false;
      setErrors(newErrors);
    }

    if (!errors[0].isError && !errors[1].isError) {
      //correct register and navigate to login
    }
    return;
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }} //Prevents page from reloading when form is submited
    >
      <input
        type="email"
        placeholder="Email"
        onChange={emailChangeHandler}
        ref={emailRef}
      />
      {errors[0].isError && <p>{errors[0].text}</p>}
      <input type="password" placeholder="Password" ref={passwordRef} />
      {errors[1].isError && <p>{errors[1].text}</p>}
      <button onClick={registerHandler} type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
