import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6
import { Button, Form } from "react-bootstrap";
import './style/Navbar.css';

const Search = (props) => {
  const { text } = props;
  const [value, setValue] = useState('')
  const navigate = useNavigate();

  const newsData = async () => {
    navigate(`/search?q=${value}`);
  };

  return (
    <Form className="d-flex gap-1 py-2">
        <Form.Control
            type="text" 
            placeholder="search here..."
            value={text}
            onChange={(e) => setValue(e.target.value)}
        />
        <Button className="button-custom" onClick={() => newsData()}>
          search 
        </Button>
    </Form>
  )
};

Search.propTypes = {
  text: PropTypes.string
}

export default Search;