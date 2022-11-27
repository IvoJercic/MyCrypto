import axios from "axios";

export default async function getCrypto(req, res) {
  let response = null;
  try {
    response = await axios.get(
      "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          Accepts: "application/json",
          "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_GAP_API_KEY,
        },
      }
    );
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    res.json({});
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
  }
  res.json({});
}
