import puppeteer from 'puppeteer';

const person = {
  email: 'user@user.com',
  password: '1234',
  amount: '100'
}


describe('Convertion Function', () => {
  test('Can make an exchange convertion', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: 'chrome'
    });

    await page.goto('http://localhost:3000');
    await page.waitForSelector('.Test-Login');
    await page.click('.Test-Login');
    await page.$$('form [test-data=Form-Login]');
    await page.click('input[name="userEmail"]');
    await page.type('input[name="userEmail"]', person.email);
    await page.click('input[name="userPassword"]');
    await page.type('input[name="userPassword"]', person.password);
    await page.click("button[type=submit]");
    await page.$$('input[name="inputCurrency"]');
    await page.click('input[name="inputCurrency"]');
    await page.type('input[name="inputCurrency"]', person.amount);
    await page.click('button[type=submit]');
    browser.close();
  }, 9000000);
});