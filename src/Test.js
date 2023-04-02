import React from "react";
import { Fragment } from "react";
import axios from "axios";


function Test(){


  async function request1() {
    const response = await axios.get('https://koreanjson.com/users/1');
    const { data } = response;
    console.log(data);
  }
  
  request1();
  
  async function request2() {
  
  const response = await axios.post('https://koreanjson.com/users', {
    name: 'ApeachIcetea',
    age: '20',
  });
  const { data } = response;
  console.log(data);
  }

  request2();

  return(
    <>
      <h1>나는 할 수 있다.</h1>
    </>
  )

}

export default Test;