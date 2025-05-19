import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'x-rapidapi-key': `${process.env.NEXT_PUBLIC_API_COINRANKING}`,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  }
};

const baseUrl = `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_API_EXCHANGERATES}/latest/NGN`;

class RatesService{
    static getRates(): any{
       return new Promise(async (resolve, reject)=>{
            try {
                const response = await axios.request(options);
                const data = response.data
                resolve(data)
                return data;
            } catch (error) {
                console.error(error);
                reject(error)
            }
        })
    }

    static getExchangeRate(): any{
      return new Promise(async (resolve, reject)=>{
        try {
          const response = await axios.get(baseUrl);
          const data = response.data
          resolve(data)
          return data;
        } catch (error) {
             console.error(error);
             reject(error)
        }
      })
    }
}

export default RatesService