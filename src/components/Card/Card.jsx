import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../../services/Api"
import { SectionCard, CardList } from "./Card.styled";
import {Container} from "../App.styled"


const Card =  () => {
  const [records, setrecords] = useState([]);

  //Запит прямо у компоненті

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => setrecords(data))
  //   .catch(err => console.error(err))
  // }, []);

  //Запит виконано за допомогою стрілочної функції, винесеної у окремий файл

  useEffect(() => {
    fetchData()
    .then(data => setrecords(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <SectionCard>
    <Container>
    <CardList>
        {records.map(record => (
          <li key={record.id}>
          <h2>{record.id}. {record.name}</h2>
          <p>Company name: {record.company.name}</p>
          <p>{record.email}</p>
          <p>{record.website}</p>
          </li>
        ))}
      </CardList>
    </Container>
    </SectionCard>

  );
}


export default Card;
