import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "./App";

const Form = () => {
  const { addTodo } = useContext(TodoContext);

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <input
        type="text"
        {...register("title", {
          required: true,
        })}
        name="title"
        placeholder="Add a task"
      />
      <button type="submit" disabled={!isValid}>
        Add
      </button>
    </form>
  );
};
export default Form;
