import puppeteer from 'puppeteer';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 800,
      height: 600
    },
    userAgent: ''
  });

  await page.goto('http://localhost:3000/');
});

afterEach(async () => {
  await page.close();
});

const checkInput = async (form: void, name: string, expectedValue: string) => {
  const input = await expect(form).toMatchElement(`input[name=${name}]`);
  const value = await page.evaluate(element => element.getAttribute('value'), input);
  expect(value).toEqual(expectedValue);
};

const checkButtonEnabled = async (form: void, text: string, enabled: boolean) => {
  const button = await expect(form).toMatchElement('button', { text });
  const disabledAttr = await page.evaluate(element => element.getAttribute('disabled'), button);
  if (enabled) {
    expect(disabledAttr).toBeNull();
  } else {
    expect(disabledAttr).toEqual('');
  }
};

it('Empty form starts with empty values and disabled buttons', async () => {
  await expect(page).toClick('button', { text: 'Empty Form' });
  const form = await expect(page).toMatchElement('form');
  await checkInput(form, 'first', '');
  await checkInput(form, 'last', '');
  await checkInput(form, 'salary', '');
  await checkButtonEnabled(form, 'Submit', false);
  await checkButtonEnabled(form, 'Clear Values', false);
});

it('Fill some values into empty form and submit it', async () => {
  await expect(page).toClick('button', { text: 'Empty Form' });
  await expect(page).toFillForm('form', {
    first: 'Jane',
    last: 'Doe',
    salary: '45475'
  });
  const form = await expect(page).toMatchElement('form');
  await checkButtonEnabled(form, 'Submit', true);
  await checkButtonEnabled(form, 'Clear Values', true);
  await expect(page).toClick('button', { text: 'Submit' });
});

it('Load form and check values loaded and buttons disabled', async () => {
  await expect(page).toClick('button', { text: 'Load Form' });
  const form = await expect(page).toMatchElement('form');
  await checkInput(form, 'first', 'John');
  await checkInput(form, 'last', 'Doe');
  await checkInput(form, 'salary', '99854');
  await checkButtonEnabled(form, 'Submit', false);
  await checkButtonEnabled(form, 'Undo Changes', false);
});

it('Changes some values in the loaded form and submit it', async () => {
  await expect(page).toClick('button', { text: 'Load Form' });
  await expect(page).toFillForm('form', {
    first: 'Jerry',
    last: 'Mustang',
    salary: '34841'
  });
  const form = await expect(page).toMatchElement('form');
  await checkButtonEnabled(form, 'Submit', true);
  await checkButtonEnabled(form, 'Undo Changes', true);
  await expect(page).toClick('button', { text: 'Submit' });
});
