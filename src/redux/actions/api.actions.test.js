import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { GET_CURRENCY_RATES } from './types.actions';
import { getCurrencyExchangeRate } from './api.actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const myRates = {
  success: true,
  rates: [
    {
      date: "2019-12-16T23:01:56.210Z",
      _id: "5df80cf801ad7d2330872189",
      countryCode: "USA",
      baseCurrencyCode: "USD",
      exchangeCurrencyCode: "EUR",
      exchangeCurrencyRate: 32.91823339931179,

    }]
};

describe('apiActions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());



  it('should request exchange rates rates', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: myRates
      }).then(() => {
        const store = mockStore();
        return (
          getCurrencyExchangeRate()(store.dispatch)
            .then(() => {
              const actions = store.getActions();
              expect(actions[0].type).toBe(GET_CURRENCY_RATES);
              expect(actions[0].payload).toMatchObject(myRates);
            })
        );
      })

    })
  });


});