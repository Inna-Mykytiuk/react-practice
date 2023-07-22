import axios from 'axios';

//Отримання даних звичайним способом
// export const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }


//Отримання даних за допомогою axios
const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchData;
