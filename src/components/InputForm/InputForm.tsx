import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { InputFormWrapper } from "./InputForm.styles";

interface Props {
  onClickSave: (title: string) => void;
  buttonTitle?: string;
}

const InputForm: React.FC<Props> = ({ buttonTitle, onClickSave }) => {
  const [title, setTitle] = useState<string>("");

  const saveTaskTitle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onClickSave(title);
    setTitle("");
  };

  const changingTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <InputFormWrapper>
      <Input
        className="Input"
        autoFocus={true}
        type="text"
        value={title}
        onChange={changingTitle}
      />
        <Button className="Button" variant="contained" onClick={saveTaskTitle}>
          {buttonTitle || <DoneIcon />}
        </Button>
    </InputFormWrapper>
  );
};

export default InputForm;
