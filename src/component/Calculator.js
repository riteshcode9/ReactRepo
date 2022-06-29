import React from "react";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const Click = (val) => {
    console.log(typeof val);
    setValue1(val);
  };

  const AddValues = (val1) => {
    if (typeof val1 === "number") {
      setValue2(value2 + val1);
    }
  };

  const SubValues = (val2) => {
    if (typeof val2 === "number") {
      setValue2(value2 - val2);
    }
  };

  const Clear = () => {
    setValue2(0);
    setValue1(0);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => AddValues(value1)}>ADD</th>
            <th onClick={() => SubValues(value1)}>SUBS</th>
            <th>MUL</th>
            <th>DIV</th>
            <th onClick={Clear}>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={() => Click(0)}>0</button>
            </td>
            <td onClick={() => Click(1)}>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
      value1: {value1}
      <br />
      final value: {value2}
    </div>
  );
};

export default Calculator;
