import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Btn({ lable, onClick, type, color }) {
  return (
    <div>
      <Button colorScheme={color ? `${color}` : "blue"} zIndex={0} onClick={onClick} type={`${type}`}>
        {lable}
      </Button>
    </div>
  );
}

export default Btn;   
