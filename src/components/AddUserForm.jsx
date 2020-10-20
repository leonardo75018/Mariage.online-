import React from "react"
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {


    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data)



        //Netoyer les champs 
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: { value: true, message: "campo requerido" }

                })

            } />
            <span className="text-danger text-small d-block mb-2">
                {errors?.name?.message}
            </span>

            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: { value: true, message: "campo requerido" }
                })
            } />
            <span className="text-danger text-small d-block mb-2">
                {errors?.username?.message}
            </span>

            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;