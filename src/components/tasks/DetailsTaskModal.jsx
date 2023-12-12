import React from "react";
import Modal from "../ui/Modal";
import { useSelector } from "react-redux";

const DetailsTaskModal = ({ isOpen, setIsOpen, id, title }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const detailsTask = tasks.find((task) => task.id === id);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      {detailsTask?.description}
    </Modal>
  );
};

export default DetailsTaskModal;
