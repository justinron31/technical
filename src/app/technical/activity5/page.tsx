"use client";

import { useState } from "react";
import styles from "../../page.module.css";
import { FiTrash2 } from "react-icons/fi";
import BackButton from "../../components/backButton";

export default function Activity5() {
  const [todoList, setTodoList] = useState<
    { text: string; checked: boolean }[]
  >([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([{ text: newTodo, checked: false }, ...todoList]); // Add new todo above
      setNewTodo("");
    }
  };

  // Handle toggling the checkbox based on the correct todo index
  const toggleCheck = (index: number) => {
    const updatedList = [...todoList];
    updatedList[index].checked = !updatedList[index].checked;
    setTodoList(updatedList);
  };

  // Handle removing a todo with confirmation prompt
  const removeTodo = (index: number) => {
    const todoText = todoList[index].text;
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${todoText}"?`
    );
    if (confirmDelete) {
      const updatedList = todoList.filter((_, i) => i !== index);
      setTodoList(updatedList);
    }
  };

  // Handle removing all checked todos with confirmation
  const removeAllCheckedTodos = () => {
    const confirmDeleteAll = window.confirm(
      "Are you sure you want to DELETE ALL checked todos?"
    );
    if (confirmDeleteAll) {
      const updatedList = todoList.filter((todo) => !todo.checked);
      setTodoList(updatedList);
    }
  };

  // Handle the Enter key event to add a new todo
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Separate unchecked and checked todos
  const uncheckedTodos = todoList.filter((todo) => !todo.checked);
  const checkedTodos = todoList.filter((todo) => todo.checked);

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.counterContainer}>
        <div className={styles.todoContainer}>
          <div className={styles.todoHeaderContainer}>
            <h2>To-Do List</h2>

            {checkedTodos.length >= 2 && (
              <button
                onClick={removeAllCheckedTodos}
                className={styles.deleteAllButton}
              >
                <FiTrash2 size={20} />
                <span></span>
              </button>
            )}
          </div>

          {/* To-Do List */}
          <div className={styles.todoList}>
            {uncheckedTodos.map((todo, index) => (
              <div key={index} className={styles.todoItemContainer}>
                <div className={styles.todoItem}>
                  <div className={styles.todoTextContainer}>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() =>
                        toggleCheck(todoList.findIndex((t) => t === todo))
                      }
                      className={styles.checkbox}
                    />
                    <span>{todo.text}</span>
                  </div>

                  <button
                    onClick={() =>
                      removeTodo(todoList.findIndex((t) => t === todo))
                    }
                    className={styles.removeButton}
                  >
                    <FiTrash2 size={20} />{" "}
                  </button>
                </div>
              </div>
            ))}

            {/* Render checked todos */}
            {checkedTodos.map((todo, index) => (
              <div key={index} className={styles.todoItemContainer}>
                <div className={styles.todoItem}>
                  <div className={styles.todoTextContainer}>
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() =>
                        toggleCheck(todoList.findIndex((t) => t === todo))
                      }
                      className={styles.checkbox}
                    />
                    <span className={styles.checkedText}>{todo.text}</span>
                  </div>

                  <button
                    onClick={() =>
                      removeTodo(todoList.findIndex((t) => t === todo))
                    }
                    className={styles.removeButton}
                  >
                    <FiTrash2 size={20} />{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Input for new to-do */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
              placeholder="Enter a new task here"
            />
            <span>Enter to add a todo.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
