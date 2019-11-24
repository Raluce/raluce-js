import Raluce from './index';

describe('Raluce', () => {
  let raluce: Raluce;

  beforeAll(() => {
    raluce = new Raluce();
  });

  describe('Get brand', () => {
    it ('Should get a brand by id', async () => {
      let brandId = '83ca7c56-7c80-4f1d-810d-f0ffe09779b7';
      let brand = await raluce.getBrandById(brandId);

      if (!brand) {
        return fail('Brand not found');
      }

      expect(brand.id).toBe(brandId);
    });

    it ('Should return null when brand is not found', async () => {
      let brand = await raluce.getBrandById('not-found-id');

      expect(brand).toBe(null);
    });
  });

  describe('Get franchise', () => {
    it('Should get a franchise by id', async () => {
      let franchiseId = '8cb7f4f5-60ad-425c-9a75-3a7a1497f882';
      let franchise = await raluce.getFranchiseById(franchiseId);

      if (!franchise) {
        return fail('Franchise not found');
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
