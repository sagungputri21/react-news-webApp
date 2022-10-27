import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Button/Button"
import PropTypes from 'prop-types'; // ES6
import { Button, Form } from "react-bootstrap";

const Search = (props) => {
  const { text } = props;
  const [value, setValue] = useState('')
  const navigate = useNavigate();

  const newsData = async () => {
    navigate(`/search?q=${value}`);
  };

  return (
    <Form className="d-flex">
        <Form.Control
            type="text" 
            placeholder="search here..."
            value={text}
            onChange={(e) => setValue(e.target.value)}
        />
        
        <Button variant="outline-success" onClick={() => newsData()}>
          search 
        </Button>
        
    </Form>
  )
};

Search.propTypes = {
  text: PropTypes.string
}

export default Search;