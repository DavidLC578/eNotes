import { ArrowIcon } from "../assets/ArrowIcon";
import { InputComponent } from "./InputComponent";
import { useState, useEffect } from "react";

export function FormComponent({ onAddTask, click }) {


    const [task, setTask] = useState({
        title: "",
        date: ""
    })

    const handleAddTask = () => {
        if (!task.title.trim()) {
            alert("El título de la tarea no puede estar vacío.");
            return;
        }

        // Aquí llamamos a onAddTask para añadir la nueva tarea
        onAddTask(task);

        // Limpia el campo de entrada
        setTask({ title: "", date: "" });
        window.location.reload()
    }
    const handleChange = (event) => {
        event.preventDefault()
        setTask({
            title: event.target.value,
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            })
        })
    }

    return (
        <form className="flex relative mt-6 w-[85%] lg:w-1/2 lg:mx-0" id="noteForm" onSubmit={handleAddTask}>
            <InputComponent cambio={handleChange} />
            <ArrowIcon click={handleAddTask} />
        </form>
    )
}