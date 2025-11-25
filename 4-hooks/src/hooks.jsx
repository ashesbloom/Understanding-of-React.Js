import { useRef, useState } from "react";

function Toggle(){
    const [visible, setVisible] = useState(true);

    return(
        <>
            {visible && <p>hidden</p>}
            <button onClick={() => setVisible(!visible)}>Toggle</button>
        </>
    );
}

function Items(){
    const [list, setList] = useState([]);

    const inputTask = useRef(null);
    function addItems(){
        // console.log(inputTask.current.value);
        const val = inputTask.current.value;
        setList(old=>[val , ...old]);
        inputTask.current.value = "";
    }

    function deleteItems(id){
        const curr = list.filter((_, index) => id !== index);
        setList(curr);
    }

    function clearItems(){
        setList([]);
    }

    return(
        <>
            <label >Enter your task:  </label>
            <input ref={inputTask} type="text" name="inputItems" id="inputItems"></input>

             {list.map((v, i) => (
                <div id={i} key={i} className="flex justify-between items-center p-3 my-2  rounded shadow-sm border border-gray-200">
                    <p className="font-medium">{v}</p>
                    <button 
                        onClick={() => { deleteItems(i) }} 
                        className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
                    >
                        Delete Task
                    </button>
                </div>
            ))}

            <button onClick={ ()=>{addItems()}}>Add Task</button>
            <br />
            <br />
            <button onClick={ ()=>{clearItems()}} className="border-2 border-amber-700">Delete <span className="text-orange-400"><b>All</b></span></button>
        </>
    );

}

export {
    Toggle,
    Items
}