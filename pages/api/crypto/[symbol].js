import puppeteer from "puppeteer";
import autoScroll from "../../../utils/autoScroll";
import scrapeData from "../../../utils/scrapeData";

/**
 *
 * @param {import('next'.NextApiRequest)} req
 * @param {import('next'.NextApiResponse)} res
 */
export default async function handler(req, res) {
  try {
    const siteUrl = "https://coinmarketcap.com/all/views/all/";
    const symbol = req.query.symbol;
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
    await browser.close();

    const jsonData = scrapeData(pageData.html, symbol);
    res.json(jsonData);
  } catch (e) {
    console.log(e);
    res.json({
      error: `Not able to fetch ${symbol.toUpperCase()} data`,
    });
  }
}
