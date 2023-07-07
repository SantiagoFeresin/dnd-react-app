import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigation = useNavigate();

  return (
    <div>
      <p>This page is not available</p>
      <Button
        onClick={() => {
          navigation("/");
        }}
      >
        Back to homepage
      </Button>
    </div>
  );
};

export default NotFound;
