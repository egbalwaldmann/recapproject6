import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Form({ onAddCard }) {
  async function SubmitHandle(event) {
    event.preventDefault();

    const text = event.target.text.value;
    const name = event.target.name.value;

    const UserCard = {
      text,
      name,
    };

    const response = await fetch("/api/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserCard),
    });

    console.log(UserCard, " this is newcard");
    onAddCard(UserCard);

    if (response.ok) {
      await response.json();
    } else {
      console.error("someting wrong");
    }

    event.target.reset();
  }

  return (
    <EntryForm onSubmit={SubmitHandle}>
      <InputWrapper>
        <input
          placeholder={`Type your thoughts...`}
          name="text"
          autoComplete="off"
          aria-label="Enter text"
        />
        <input
          placeholder={`your name..`}
          name="name"
          aria-label="Enter your name"
        />
      </InputWrapper>
      <Button>
        <BsPlusCircleFill aria-label="Create new entry" />
      </Button>
    </EntryForm>
  );
}

const EntryForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 70px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    border: none;
    padding: 10px;

    height: 100%;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
`;

const Button = styled.button`
  color: green;
  border: none;
  border-radius: 7px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  svg {
    height: 35px;
    width: 35px;
  }
`;
