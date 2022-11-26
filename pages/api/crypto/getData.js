import { load } from "cheerio";
import puppeteer from "puppeteer";

/**
 *
 * @param {import('next'.NextApiRequest)} req
 * @param {import('next'.NextApiResponse)} res
 */
export default async function getData(req, res) {
  try {
    let jsonData = undefined;
    const siteUrl = "https://coinmarketcap.com/all/views/all/";
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(siteUrl);

    await autoScroll(page);

    const pageData = await page.evaluate(() => {
      return {
        html: document.documentElement.innerHTML,
      };
    });
    jsonData = scrapeData(pageData.html);
    await browser.close();
    res.json(jsonData);
  } catch (e) {
    console.log(e);
    res.json({ status: "Not able to fetch data" });
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

function scrapeData(pageHtml) {
  const keys = [
    "rank",
    "name",
    "symbol",
    "marketCap",
    "price",
    "circulatingSupply",
    "volume",
    "1h",
    "24h",
    "7d",
  ];
  const coinDictionary = {};
  const selector = " table > tbody > tr";

  const $ = load(pageHtml);
  $(selector).each((parentIndex, parentElem) => {
    const coinObject = {};
    let keyIndex = 0;
    $(parentElem)
      .children()
      .each((childIndex, childElem) => {
        let tdValue = $(childElem).text();
        //Name
        if (keyIndex === 1) {
          tdValue = $("a", $(childElem).html()).attr("title");
          coinObject["logo"] = $("img", $(childElem).html()).attr("src");
        }
        //Market cap
        if (keyIndex === 3) {
          tdValue = tdValue.split("$")[2];
        }
        //Price
        if (keyIndex === 4) {
          tdValue = tdValue.split("$")[1];
        }
        //Cirrculating supply
        if (keyIndex === 5) {
          tdValue = tdValue.split(" ")[0];
        }
        //Volume
        if (keyIndex === 6) {
          tdValue = tdValue.split("$")[1];
        }
        //Percentage
        if (keyIndex > 6) {
          tdValue = tdValue.split("%")[0];
        }
        if (tdValue) {
          coinObject[keys[keyIndex]] = tdValue;
          keyIndex++;
        }
      });
    console.log(coinObject);
    coinDictionary[coinObject["symbol"]] = coinObject;
  });
  return coinDictionary;
}
