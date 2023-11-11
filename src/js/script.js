require('dotenv').config();
const api_key = process.env.OMDB_API_KEY;
const query = "fortnite";
const api_url =  `https://www.omdbapi.com/?t=${query}&apikey=${api_key}`;
 

// fetchdata() fetches api call and returns json object
async function fetchData(url) {
   
    try {
        const response = await fetch(url);
        const JSON = await response.json();
        return JSON;
    } catch (error) {
        throw error;
    };
    
};

//parse() grabs certain data from api call.
function parse(DATA){
    let data = DATA;
    let result = {};

    try {
        result.title = data['Title'];
        result.year = data['Year'];
        result.genre = data['Genre'];
        result.released = data['Released'];
        result.plot = data["Plot"];
        result.movie_length = data['Runtime'];
        result.IMDB_rating = data['imdbRating'];
    } catch (error) {
        //If any data points encounter an issue, set it to none.
            if (!result.title) result.title = "None";
            if (!result.year) result.year = "None";
            if (!result.genre) result.genre = "None";
            if (!result.released) result.released = "None";
            if (!result.plot) result.plot = "None";
            if (!result.movie_length) result.movie_length = "None";
            if (!result.IMDB_rating) result.IMDB_rating = "None";
    };
    return result;

}

//fetchData() returns promise object, so need to await using async
(async () => {
    let parsedData;
    try {
        const data = await fetchData(api_url);
        parsedData = parse(data);
        console.log(parsedData)
    } catch (error) {
        console.error(error);
    }
})();

