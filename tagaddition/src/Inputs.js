import { useState } from "react";

export default function Inputs() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [sum, setSum] = useState("");
  const [error1,setError1] = useState(false);
  const [error2,setError2] = useState(false);

  const changeHandler1 = e => {
    e.preventDefault();
    const value = e.target.value;
    if(isNaN(value)) {
      setError1(true);
    }
    else {
      setInput1(value);
    }
  };

  const changeHandler2 = e => {
    e.preventDefault();
    const value = e.target.value;
    if(isNaN(value)) {
      setError2(true);
    }
    else {
      setInput2(value)
    }
  };
  
  const AddTwoInputs = e => {
    e.preventDefault();
    if(input1 !== "" && input2 !== "") {
      setSum((Number(input1)*10 + Number(input2)*10)/10);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        onChange={changeHandler1}
        value={input1}
        placeholder="input1"
      ></input>
      {error1 && <div>Please provide numbers for input1</div>}
      <input
        type="text"
        name="input2"
        onChange={changeHandler2}
        value={input2}
        placeholder="input2"
      ></input>
      {error2 && <div>Please provide numbers for input2</div>}
      <button type="button" data-testid="addInputs" onClick={AddTwoInputs}>
        Add
      </button>
      <div>{sum}</div>
    </div>
  );
}
