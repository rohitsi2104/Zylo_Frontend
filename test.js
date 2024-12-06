// Import axios
import axios from "axios";

// Define the URL you want to call
const url = 'https://zylo-zyrax-backend-uln9.vercel.app/zylo/offers'; // Replace with your endpoint

// Function to perform GET request
async function fetchData() {
  try {
    const response = await axios.get(url);
    console.log('Response Data:', response.data);
  } catch (error) {
    console.error('Error making GET request:', error);
  }
}

// Call the function
fetchData();
