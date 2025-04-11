import React, {useState} from 'react'
import {updateNameInDB} from "./api.js";
function App(){
   const [name, setName] = useState(
       ()=>JSON.parse(localStorage.getItem("name"))|| "Anonymous user"
   )
    async function handleSubmit(formAction){
       try {
           const newName = await updateNameInDB(formAction.get("name"));
           setName(newName)
       } catch (error) {
           console.log(error)
       }
    }
    return (
        <>
            <p className={'username'}>
                Current User: <span>{name}
            </span>
            </p>
            <form action={handleSubmit}> //handle submit exists inside action, but name attribute is needed to amke it function
                <input
                type="text"
                name={"name"}
                required
                />
                <button type="submit">
                    Update
                </button>
            </form>
        </>
    )
}
export default App
