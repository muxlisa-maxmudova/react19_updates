import React, {useState} from 'react'
import {updateNameInDB} from "./api.js";
function App(){
    const [name, setName] = useState(
        ()=>JSON.parse(localStorage.getItem("name"))||"Anonymous user"
    )
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    async function handleSubmit(formAction){
        setLoading(true)
        setError(null)
        try{
            const newName = await updateNameInDB(formAction.get("name"))
            setName(newName)
        } catch (error) {
            console.error(error)
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <>
            <p className={'username'}>
                Current User: <span>{name}
            </span>
            </p>
            <form>
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