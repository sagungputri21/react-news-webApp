import React from "react";

const Button = ({ 
    onClick, children, extraStyle 
  }) => {
    return (
      <button onClick={onClick} className={`py-2 px-5 ${extraStyle}`}>
        {children}
      </button>
    )
  };
  
export default Button;
  