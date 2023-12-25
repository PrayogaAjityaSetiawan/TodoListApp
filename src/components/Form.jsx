import toast from 'react-hot-toast';
const Form = ({inputText, setInputText, setTodos, todos, inputReff}) => {

    // State Untuk Mengambil Inputan User
    const handleChange = (e) => {
        setInputText(e.target.value)
    }


    // Function Untuk Menambahkan Task
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            toast.error("task cannot be empty!")
            return;
        }
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("")
        toast.success("task added successfully!")
    }

    return (
        <div className="flex gap-2">
            <input 
            value={inputText}
            onChange={handleChange}
            className=" box-border rounded-lg p-3 w-[250px] lg:w-[300px] border-none outline-none"
            type="text" 
            placeholder="Enter the task....." />
            <button onClick={submitHandler} className=" bg-blue-500 text-white rounded-lg py-2 px-3">
            Add
            </button>
        </div>
    )
}
export default Form;