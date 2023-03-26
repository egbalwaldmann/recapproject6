import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Home() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api");
      const json = await data.json();
      console.log(json, " this is a json");
      setCardList(json);
    };
    fetchData().catch(console.error);
  }, []);

  function addCard(newCard) {
    setCardList([newCard, ...cardList]);
    handleRender();
  }

  async function handleRemoveCard(id) {
    console.log("clicked");
    await fetch(`/api/card/${id}`, {
      method: "DELETE",
    });
    handleRender();
  }

  async function handleRender() {
    const data = await fetch("/api/card");
    const cardData = await data.json();
    setCardList(cardData);
  }

  async function handleUpdateCard(updatedCard) {
    const response = await fetch(`api/card/${updatedCard._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedCard),
    });
    handleRender();
  }

  return (
    <BoardWrapper>
      <CardGrid>
        {cardList.map((card) => {
          return (
            <Card
              key={card.name}
              name={card.name}
              text={card.text}
              onRemoveCard={() => handleRemoveCard(card._id)}
              onUpdateCard={handleUpdateCard}
              id={card._id}
            />
          );
        })}
      </CardGrid>
      <Form onAddCard={addCard} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
