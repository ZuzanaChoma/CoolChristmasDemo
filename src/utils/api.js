import axios from 'axios';

export async function getCategories() {
    const response = await axios.get('http://localhost:3000/categories');
  
    return response.data;
  }


