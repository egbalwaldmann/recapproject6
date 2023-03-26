import {
  RiDeleteBinLine,
  RiPencilLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";

export default function Card({
  name,
  text,
  onRemoveCard,
  onUpdateCard,
  id,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;

    const updatedCard = {
      text: formElements.text.value,
      name: formElements.name.value,
      _id: id,
    };
    onUpdateCard(updatedCard);
    setIsEditing(false);
  }

  return (
    <CardWrapper>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            name="text"
            id="text"
            autoComplete="off"
            defaultValue={text}
            aria-label="Edit your text"
          />
          <input
            name="name"
            id="name"
            defaultValue={name}
            aria-label="Edit your name"
          />
          <Button>
            <SaveButton aria-label="Save changes" />
          </Button>
        </form>
      )}
      {!isEditing && (
        <>
          <DeleteIcon onClick={() => onRemoveCard(id)} />
          <EditIcon onClick={() => setIsEditing(true)} />
          <Text>{text}</Text>
          <Name>{name}</Name>
        </>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  border: 1px solid gray;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: relative;
`;

const Text = styled.p`
  overflow-wrap: break-word;
  width: 90%;
  color: #252629;
  font-size: 1.3rem;
  margin: 0.7rem 0 0.7rem 0;
`;

const Name = styled.div`
  text-transform: uppercase;
  overflow-wrap: break-word;
  font-size: 1rem;
  margin-top: 10px;
  color: #252629;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: orange;
`;

const EditIcon = styled(RiPencilLine)`
  position: absolute;
  top: 50px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: green;
`;

const SaveButton = styled(RiCheckboxCircleLine)`
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  right: 20px;
  color: #fe4b13;
`;

const Button = styled.button`
  background-color: white;
  color: #fe4b13;
  border: none;
  border-radius: 7px;
`;
