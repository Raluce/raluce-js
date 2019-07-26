import Raluce from './index';

describe('Raluce', () => {
  describe('Franchises API', () => {
    let raluce: Raluce;

    beforeAll(() => {
      raluce = new Raluce();
    });

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
});
