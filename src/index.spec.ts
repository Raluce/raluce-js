import Raluce from './index';
import { OrderType, ShoppingCartResponse } from './models/ShoppingCart';

describe('Raluce', () => {
  let raluce: Raluce;

  beforeAll(() => {
    raluce = new Raluce();
  });

  describe('Get franchise', () => {
    it('Should get a franchise by id', async () => {
      let franchiseId = '8cb7f4f5-60ad-425c-9a75-3a7a1497f882';
      let franchise = await raluce.getFranchiseById(franchiseId);

      if (!franchise) {
        return fail("Franhicse not found");
      }

      expect(franchise.id).toBe(franchiseId);
    });

    it('Should return null when franchise not found', async () => {
      let franchise = await raluce.getFranchiseById('not-found-id');

      expect(franchise).toBe(null);
    });
  });

  // describe('Create shopping cart', () => {
  //   it('Should create a shopping cart', () => {
  //     let response = raluce.createShoppingCart({
  //       customer: {
  //         email: 'john-doe@raluce.com',
  //         firstName: 'John',
  //         lastName: 'Doe',
  //         phone: '+16173720483',
  //         address: {
  //           line1: '10 Pearl ave',
  //           line2: null,
  //           city: 'Revere',
  //           state: 'MA',
  //           zipcode: '02151',
  //           country: 'USA'
  //         },
  //       },
  //       allowedSMS: true,
  //       note: '',
  //       tip: 0,
  //       type: OrderType.pickup,
  //       products: [{
  //         id: 'product-id',
  //         quantity: 1,
  //         options: [{
  //           id: 'option-id',
  //           choices: [{
  //             id: 'choice-id'
  //           }]
  //         }]
  //       }]
  //     });

  //     expect(response.id).toBeDefined();
  //     expect(response.url).toBeDefined();
  //   });
  // });
});
