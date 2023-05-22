import React, { useState } from "react";
import "./Todolist.css";
import NewtodoForm from "./NewtodoForm";
import Mylist from "./Mylist";

function Todolist() {
  const [newTodo, setNewTodo] = useState([]);

  const updateTodo = (id, updatedTodo) => {
    const updatedList = newTodo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, Newtodo: updatedTodo };
      }
      return todo;
    });
    setNewTodo(updatedList);
  };

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <Mylist
        newTodo={newTodo}
        updateTodo={updateTodo}
        setNewTodo={setNewTodo}
      />
      <NewtodoForm newTodo={newTodo} setNewTodo={setNewTodo} />
    </div>
  );
}

export default Todolist;
// import React, { useState } from "react";: ใช้ในการ import React และ useState เพื่อใช้งาน React Hooks ในการเก็บสถานะ (state) ในคอมโพเนนต์นี้

// import "./Todolist.css";: การ import ไฟล์ CSS เพื่อใช้สไตล์ใน TodoList component.

// import NewtodoForm from "./NewtodoForm";: การ import คอมโพเนนต์ NewtodoForm จากไฟล์ "./NewtodoForm.js"

// import Mylist from "./Mylist";: การ import คอมโพเนนต์ Mylist จากไฟล์ "./Mylist.js"

// function Todolist() { ... }: ประกาศคอมโพเนนต์ Todolist ซึ่งเป็นฟังก์ชันสำหรับแสดง Todo List และรับประสบการณ์การใช้งานผ่านองค์ประกอบต่าง ๆ

// const [newTodo, setNewTodo] = useState([]);: ประกาศตัวแปร newTodo และ setNewTodo โดยใช้ useState hook เพื่อเก็บสถานะของรายการ Todo ใหม่ที่ถูกสร้างขึ้น โดยค่าเริ่มต้นจะเป็นอาเรย์เปล่า ([])

// const updateTodo = (id, updatedTodo) => { ... }: ประกาศฟังก์ชัน updateTodo ที่รับพารามิเตอร์ id และ updatedTodo เพื่ออัปเดตรายการ Todo ที่มี id ที่กำหนดให้เป็น updatedTodo ใหม่ โดยจะสร้างอาเรย์ updatedList โดยใช้ map() เพื่ออัปเดตรายการ Todo ใน newTodo แล้วกำหนดค่าใหม่ให้กับ newTodo โดยใช้ setNewTodo()

// <div className="TodoList"> ... </div>: กล่องของ TodoList component ที่มี className เป็น "TodoList" ซึ่งจะใช้สไตล์ CSS ที่ได้ import มาก่อนหน้านี้

// <h1>Todo List <span>A simple React Todo List App</span></h1>: ส่วนหัวของ TodoList component ที่แสดงชื่อและคำอธิบายสั้น ๆ เกี่ยวกับแอปพลิเคชัน

// <Mylist newTodo={newTodo} updateTodo={updateTodo} setNewTodo={setNewTodo} />: เรียกใช้คอมโพเนนต์ Mylist และส่งค่า newTodo, updateTodo และ setNewTodo เป็น prop ให้กับ Mylist component

// <NewtodoForm newTodo={newTodo} setNewTodo={setNewTodo} />: เรียกใช้คอมโพเนนต์ NewtodoForm และส่งค่า newTodo และ setNewTodo เป็น prop ให้กับ NewtodoForm component

// export default Todolist;: ส่วนสุดท้ายของโค้ดที่เป็นการส่งออก (export) Todolist component เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้