const axios = require('axios');
const key = "615dafb35e274cd79678e9a1a6c084b5";

export const getAllUsers = async (country:string) => {
    try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`);
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

