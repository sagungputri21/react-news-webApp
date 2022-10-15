import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ 
    onClick, children, extraStyle 
  }) => {
    return (
      <Button onClick={onClick} className={`py-2 px-3 ${extraStyle}`}>
        {children}
      </Button>
    )
  };
  
export default CustomButton;
  