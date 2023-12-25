import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const Todo = ({text,todos,todo,setTodos}) => {
    // functon Untuk Menghapus Task
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        toast.error("task deleted successfully!");
    }

    // function Untuk Mengubah Task
    const completeHandler = () => {
        toast.success("Completed task!");
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                    
                }
                
            }
            return item;
            
        }))
    }

    
    return (
            <div className="w-[310px] lg:w-[320px] flex items-center justify-between bg-white rounded-lg">
                <li className={`${todo.completed ?  "line-through italic text-gray-500 capitalize p-3" : "p-3 capitalize"}`}>{text}</li>
                <div>
                    <button onClick={deleteHandler} className="bg-red-500 py-2 p-3 text-white"><MdDelete/></button>
                    <button onClick={completeHandler} className="bg-green-500 py-2 px-3 text-white"><FaCheck /></button>
                </div>
            </div>
    )
}
export default Todo;