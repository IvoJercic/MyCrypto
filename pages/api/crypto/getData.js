import puppeteer from "puppeteer";
import autoScroll from "../../../utils/autoScroll";
import scrapeData from "../../../utils/scrapeData";

/**
 *
 * @param {import('next'.NextApiRequest)} req
 * @param {import('next'.NextApiResponse)} res
 */
let globals = null;
export default async function handler(req, res) {
  try {
    if (!globals) {
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
      globals = jsonData;
      await browser.close();
      res.json(jsonData);
    } else {
      res.json(globals);
    }
  } catch (e) {
    console.log(e);
    res.json(null);
  }
}
