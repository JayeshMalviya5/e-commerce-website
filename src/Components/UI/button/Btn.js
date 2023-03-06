import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Btn({ lable, onClick }) {
  return (
    <div>
      <Button colorScheme="blue" zIndex={0} onClick={onClick}>
        {lable}
      </Button>
    </div>
  );
}

export default Btn;
