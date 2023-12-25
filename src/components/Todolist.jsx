import Todo from "./Todo";


const TodoList = ({todos, setTodos}) => {
    return (
        <div className="mt-3">
            <ul className={`${todos.length > 2 ? "flex flex-col h-60 overflow-y-scroll gap-3" : "flex flex-col o gap-3"}`}>
                {todos.map((todo) => {
                    return (
                        <Todo key={todo.id} setTodos={setTodos} todos={todos} text={todo.text} todo={todo}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;