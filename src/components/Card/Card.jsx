import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../../services/Api"
import { CardList, CardText, Email } from "./Card.styled";



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


    <CardList>
        {records.map(record => (
          <li key={record.id}>
          <h2>{record.id}. {record.name}</h2>
          <CardText>Company name: {record.company.name}</CardText>
          <Email>{record.email}</Email>
          <CardText>{record.website}</CardText>
          </li>
        ))}
      </CardList>

  );
}


export default Card;
