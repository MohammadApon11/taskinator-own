import React from "react";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const { register, handleSubmit, reset } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));

    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5 mt-3">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="date" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="date"
            className="w-full rounded-md"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignedTo" className="mb-2">
            Assign to
          </label>
          <select name="" id="assignedTo" {...register("assignedTo")}>
            <option value="mohammad apon">Mohammad Apon</option>
            <option value="rudro">Rudro</option>
            <option value="nowrin">Nowrin</option>
            <option value="noishi">Noishi</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select
            name=""
            id="priority"
            className="w-full rounded-md"
            {...register("priority")}
          >
            <option value="high" defaultValue>
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            className="btn btn-danger"
            type="button"
          >
            Cancel
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
