import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewtodoForm.css";

function NewtodoForm(props) {
  const [addInput, setAddInput] = useState("");
  const { setNewTodo, newTodo } = props;

  const handleChange = (e) => {
    setAddInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (addInput.trim() === "") {
      return;
    }

    const newTodoItem = {
      id: uuidv4(),
      Newtodo: addInput,
    };

    setNewTodo([...newTodo, newTodoItem]);
    setAddInput("");
  };

  return (
    <div>
      <form className="NewTodoForm">
        <label>New todo</label>
        <input
          id={uuidv4()}
          type="text"
          value={addInput}
          onChange={handleChange}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>ADD TODO</button>
      </form>
    </div>
  );
}

export default NewtodoForm;
// const [addInput, setAddInput] = useState("");: สร้าง state addInput และฟังก์ชัน setAddInput โดยค่าเริ่มต้นของ addInput คือสตริงว่าง

// const { setNewTodo, newTodo } = props;: การดึงค่า setNewTodo และ newTodo จาก props

// const handleChange = (e) => { ... }: ฟังก์ชันที่ใช้ในการตรวจจับการเปลี่ยนแปลงของ input ในฟอร์ม และอัปเดตค่า addInput

// const addTodo = (e) => { ... }: ฟังก์ชันที่ใช้ในการเพิ่มรายการ Todo ใหม่ โดยเมื่อคลิกปุ่ม "ADD TODO" จะถูกเรียกใช้

// e.preventDefault();: การป้องกันพฤติกรรมเริ่มต้นของฟอร์มที่จะเรียกใช้งานฟังก์ชันแก้ไข

// if (addInput.trim() === "") { ... }: เงื่อนไขที่ตรวจสอบว่า input เป็นช่องว่างหรือไม่ ถ้าใช่จะไม่ทำการเพิ่มรายการ Todo

// const newTodoItem = { ... }: สร้างออบเจ็กต์ newTodoItem ที่ประกอบด้วย id ที่สร้างจาก uuidv4() และ Newtodo ที่มีค่าเท่ากับ addInput

// setNewTodo([...newTodo, newTodoItem]);: อัปเดตรายการ Todo ใหม่โดยเพิ่ม newTodoItem เข้าไปในอาร์เรย์ newTodo

// setAddInput("");: เคลียร์ค่า addInput ให้เป็นสตริงว่าง

// <form className="NewTodoForm"> ... </form>: แบบฟอร์มสำหรับเพิ่มรายการ Todo ใหม่ที่มี className เป็น "NewTodoForm"

// <label>New todo</label>: ป้ายระบุช่องป้อนข้อความสำหรับรายการ Todo ใหม่

// <input id={uuidv4()} type="text" value={addInput} onChange={handleChange} placeholder="New Todo" />: ช่องป้อนข้อความที่ใช้ในการป้อนรายการ Todo ใหม่ โดยมีค่า addInput เป็นค่าเริ่มต้น และมีการเรียกใช้ handleChange เมื่อมีการเปลี่ยนแปลงค่า

// <button onClick={addTodo}>ADD TODO</button>: ปุ่มที่ใช้ในการเพิ่มรายการ Todo ใหม่ โดยเรียกใช้ฟังก์ชัน addTodo เมื่อคลิก