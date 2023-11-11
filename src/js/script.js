require('dotenv').config();
const api_key = process.env.OMDB_API_KEY;
let query = "fortnite"
const api_url =  `https://www.omdbapi.com/?t=${query}&apikey=${api_key}`;
 

// Defining async function
async function getapi(url) {
   
    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
    } catch (error) {
        return error
    }
}
getapi(api_url);