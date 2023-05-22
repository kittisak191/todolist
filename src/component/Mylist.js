import React, { useState } from "react";
import "./Mylist.css";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mylist = (props) => {
  const { newTodo, updateTodo, setNewTodo } = props;

  const [editInput, setEditInput] = useState("");
  const [editingId, setEditingId] = useState("");

  const handleEditInputChange = (e) => {
    setEditInput(e.target.value);
  };

  const TodoRemove = (id) => {
    const updatedList = newTodo.filter((todo) => todo.id !== id);
    setNewTodo(updatedList);
  };

  const TodoEdit = (id) => {
    setEditingId(id);
    setEditInput("");
  };

  const TodoSave = (id) => {
    updateTodo(id, editInput);
    setEditingId("");
  };

  const showRemoveButton = (id) => {
    return editingId !== id;
  };

  return (
    <div className="Todo-head">
      <ul>
        {newTodo.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <div className="Todo">
                <form
                  className="Todo-edit-form"
                  onSubmit={() => TodoSave(todo.id)}
                >
                  <input
                    type="text"
                    value={editInput}
                    onChange={handleEditInputChange}
                    className={
                      todo.completed ? "Todo-task completed" : "Todo-task"
                    }
                  />
                  <button type="submit">Save</button>
                </form>
              </div>
            ) : (
              <div className="Todo">
                <div className="Todo-buttons">
                  {todo.Newtodo}
                  <button onClick={() => TodoEdit(todo.id)}>
                    <FontAwesomeIcon className="icon-edit" icon={faEdit} />
                  </button>
                  {showRemoveButton(todo.id) && (
                    <button onClick={() => TodoRemove(todo.id)}>
                      <FontAwesomeIcon className="icon-trash" icon={faTrash} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mylist;

// import React, { useState } from "react";: ใช้ในการ import React และ useState เพื่อใช้งาน React Hooks ในการเก็บสถานะ (state) ในคอมโพเนนต์นี้

// import "./Mylist.css";: การ import ไฟล์ CSS เพื่อใช้สไตล์ใน Mylist component.

// import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";: การ import ไอคอน faTrash และ faEdit จากไลบรารี @fortawesome/free-solid-svg-icons เพื่อใช้ในการแสดงไอคอนของปุ่ม

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";: การ import คอมโพเนนต์ FontAwesomeIcon จากไลบรารี @fortawesome/react-fontawesome เพื่อใช้ในการแสดงไอคอน

// const Mylist = (props) => { ... }: ประกาศคอมโพเนนต์ Mylist ซึ่งเป็นฟังก์ชันสำหรับแสดงรายการ Todo List และรับประสบการณ์การใช้งานผ่านองค์ประกอบต่าง ๆ

// const { newTodo, updateTodo, setNewTodo } = props;: ประกาศตัวแปร newTodo, updateTodo, และ setNewTodo และกำหนดค่าให้เท่ากับ props ที่ถูกส่งเข้ามา

// const [editInput, setEditInput] = useState("");: ประกาศตัวแปร editInput และ setEditInput โดยใช้ useState hook เพื่อเก็บสถานะของค่าที่ใช้ในการแก้ไขรายการ Todo

// const [editingId, setEditingId] = useState("");: ประกาศตัวแปร editingId และ setEditingId โดยใช้ useState hook เพื่อเก็บสถานะของรายการ Todo ที่กำลังถูกแก้ไข

// const handleEditInputChange = (e) => { ... }: ฟังก์ชันที่ใช้ในการตรวจจับการเปลี่ยนแปลงของ input ในการแก้ไขรายการ Todo และอัปเดตค่า editInput

// const TodoRemove = (id) => { ... }: ฟังก์ชันที่ใช้ในการลบรายการ Todo โดยอัปเดตรายการ Todo ใหม่ที่ไม่มีรายการที่ต้องการลบ

// const TodoEdit = (id) => { ... }: ฟังก์ชันที่ใช้ในการเริ่มแก้ไขรายการ Todo โดยอัปเดต editingId เพื่อแสดงแบบฟอร์มแก้ไข

// const TodoSave = (id) => { ... }: ฟังก์ชันที่ใช้ในการบันทึกรายการ Todo ที่ถูกแก้ไข โดยอัปเดตรายการ Todo และเคลียร์ editingId และ editInput

// const showRemoveButton = (id) => { ... }: ฟังก์ชันที่ใช้ในการตรวจสอบว่าต้องแสดงปุ่มลบหรือไม่ โดยตรวจสอบจากค่าของ editingId

// <div className="Todo-head"> ... </div>: กล่องหัวของ Mylist component ที่มี className เป็น "Todo-head"

// <ul> ... </ul>: องค์ประกอบรายการรายการ Todo ที่ถูกแสดง

// {newTodo.map((todo) => ( ... ))}: การวนลูปผ่านแต่ละรายการ Todo ใน newTodo และสร้างองค์ประกอบ <li> สำหรับแต่ละรายการ

// {editingId === todo.id ? ( ... ) : ( ... )}: เงื่อนไขที่ตรวจสอบว่ารายการ Todo กำลังถูกแก้ไขหรือไม่ ถ้าใช่จะแสดงแบบฟอร์มแก้ไข ถ้าไม่ใช่จะแสดงข้อมูลรายการ Todo ตามปกติ

// <form className="Todo-edit-form" onSubmit={() => TodoSave(todo.id)}> ... </form>: แบบฟอร์มที่ใช้ในการแก้ไขรายการ Todo โดยเมื่อกดส่ง (submit) จะเรียกใช้ฟังก์ชัน TodoSave เพื่อบันทึกรายการที่แก้ไข

// <input type="text" value={editInput} onChange={handleEditInputChange} className={todo.completed ? "Todo-task completed" : "Todo-task"} />: ช่องป้อนข้อความที่ใช้ในการแก้ไขรายการ Todo โดยมีค่า editInput เป็นค่าเริ่มต้น และมีการเรียกใช้ handleEditInputChange เมื่อมีการเปลี่ยนแปลงค่า

// <button type="submit">Save</button>: ปุ่มในแบบฟอร์มที่ใช้ในการบันทึกรายการที่แก้ไข

// {todo.Newtodo}: แสดงข้อความของรายการ Todo

// <button onClick={() => TodoEdit(todo.id)}> ... </button>: ปุ่มที่ใช้ในการเริ่มแก้ไขรายการ Todo โดยเรียกใช้ฟังก์ชัน TodoEdit

// {showRemoveButton(todo.id) && ( ... )}: เงื่อนไขที่ตรวจสอบว่าต้องแสดงปุ่มลบหรือไม่ ถ้าใช่จะแสดงปุ่มลบ

// <FontAwesomeIcon className="icon-edit" icon={faEdit} />: ไอคอนแก้ไขที่ใช้ในปุ่มแก้ไขรายการ Todo

// <FontAwesomeIcon className="icon-trash" icon={faTrash} />: ไอคอนถังขยะที่ใช้ในปุ่มลบรายการ Todo

// export default Mylist;: ส่วนสุดท้ายของโค้ดที่เป็นการส่งออก (export) Mylist component เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้