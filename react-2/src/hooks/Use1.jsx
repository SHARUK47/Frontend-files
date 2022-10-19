import { useState, useEffect } from "react";
function Use1 (){
    const[count, setCount] = useState(0);
    useEffect(() => {
        console.log(`You have clicked the button ${count} times`);
    });
    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Click Me</button>
        </div>
    )
}
export default Use1;