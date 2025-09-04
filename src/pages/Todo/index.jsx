import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import styles from './Todo.module.scss';
import clsx from 'clsx';

function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Lấy giá trị từ input
    };

    const handleSubmit = (e) => {
        const uniqId = Date.now() + Math.random();
        e.preventDefault(); // Ngăn trang reload khi submit form
        if (inputValue.trim()) {
            setTodos([...todos, { id: uniqId, text: inputValue, completed: false }]);
            setInputValue(''); // Reset input sau khi thêm
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }))
    }

    return (
        <div className={styles.todo_wrapper}>
            <form onSubmit={handleSubmit}>
                <input
                    id="todo_input"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                    type="text"
                />
                <button type="submit" className={styles.btn_add}>Thêm</button>
            </form>


            {
                todos.length === 0 && <span>Chưa có task nào. Hãy thêm task đầu tiên!</span>
            }
            <ul className={styles.todo_wrapper}>
                {
                    todos.map(todo => {
                        return (
                            <li key={todo.id} className={todo.completed ? styles.completed : ''}>
                                <div className={styles.todo_left}>
                                    {todo.text}
                                </div>
                                <div className={styles.todo_right}>
                                    <FontAwesomeIcon
                                        icon={todo.completed ? faCircleCheck : faCircle}
                                        className={clsx(styles.tasks_item, {
                                            [styles.tasks_completed]: todo.completed,
                                            [styles.tasks_not_completed]: !todo.completed
                                        })}
                                        onClick={() => toggleCompleted(todo.id)}
                                    />
                                    <button onClick={() => handleDelete(todo.id)} className={styles.btn_delete}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className={styles.todo_footer}>
                Tổng: <span className={styles.todo_footer_count}>{todos.length} </span>task(s),
                Hoàn thành <span className={styles.todo_footer_count}>{todos.filter(todo => todo.completed).length} </span>task(s),
                Còn lại <span className={styles.todo_footer_count}>{todos.filter(todo => !todo.completed).length} </span>task(s)
            </div>
        </div>
    );
}


export default TodoApp;