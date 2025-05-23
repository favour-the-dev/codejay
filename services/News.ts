import axios from "axios";
// const url = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=1234567890";
const url = "https://crypto-news16.p.rapidapi.com/news/top/6";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_COINRANKING}`,
    "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
  },
};
class NewsService {
  static GetAllNews() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url, options);
        const data = response.data;
        resolve(data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export default NewsService;
