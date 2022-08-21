import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import todoStore from "../constants";
import {observer} from "mobx-react"
import "../style/form.scss";
const FormCreate = () => {
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    imge: ""
  });
  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };
  function checkValue (val){
    let a = 0;
    todoStore.data.forEach((e,i) =>{
      if (e.name == val){
        a++;
      }
    });
    if (a > 0) return true;
    else return false;
  }
  return (
    <div className="form-contain">
      <form 
      // onSubmit={handleSubmit}
      >
      <h1>Add New Product</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input 
        id="name"
        // value={} 
        onChange={handleChangeFile}
        type="text"
        required 
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input 
        id="price"
        // value={price} 
        onChange={(e)=> handleChangeFile(e)}
        type="number"
        required 
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input 
        id="image"
        onChange={(e)=> handleChangeFile(e)} 
        required 
        />
      </div>
      <div>
        <button type="submit">Save</button>
        <button>Clear</button>
      </div>
      </form>
    </div>
  );
};

export default observer(FormCreate);
