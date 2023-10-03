import { useState} from "react";


const Form = ()=>{
    return (
        <form>
            <fieldset>
            <label> Date </label>
            <label> Title </label>
            <label> Content </label>
            <label> Image </label>
            <label> Alt </label>
            </fieldset>
            <button type="submit">Add new post </button>
        </form>

    );
};

export default Form;