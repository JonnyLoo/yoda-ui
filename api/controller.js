const axios = require('axios');
const config = require('../configs');

const getQuotes = async (req, res) => {
  try {
    const quotes = await axios.get(`${config.API_URL}/yoda/v1/quotes`);

    return res.status(200).send(quotes.data);
  } catch (err) {
    return res.status(418).send(err);
  }
}

const getRandomQuote = async (req, res) => {
  try {
    const quote = await axios.get(`${config.API_URL}/yoda/v1/quotes/random`);

    return res.status(200).send(quote.data);
  } catch (err) {
    return res.status(418).send(err);
  }
}

module.exports = {
  getQuotes,
  getRandomQuote
};
