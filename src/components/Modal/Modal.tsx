import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputForm from "../InputForm/InputForm";
import { ModalWrapper } from "./Modal.styles";

type Props = {
  isModalOpen: boolean;
  isEditable?: boolean;
  onCloseModal: () => void;
  onAddTask?: (title: string) => void;
  onEditTodo?: (title: string) => void;
};

const ModalInput = ({ isModalOpen, isEditable, onEditTodo, onCloseModal, onAddTask }: Props) => {
  const onSave = isEditable ? onEditTodo : onAddTask;
  const onTaskEnd = (title: string) => {
    onSave?.(title);
    onCloseModal();
  };


  return (
    <ModalWrapper>
      <Modal
        open={isModalOpen}
        onClose={onCloseModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        className="ModelContainer"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ backgroundColor: "white", p: "70px", borderRadius: "20px" }}>
          <Typography
            sx={{ mb: 3 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Впишите текст в поле ввода
          </Typography>
          <InputForm onClickSave={onTaskEnd} />
        </Box>
      </Modal>
    </ModalWrapper>
  );
};

export default ModalInput;
