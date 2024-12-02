import { test, expect, APIResponse } from '@playwright/test';
import apiSwapiPaths from '../utils/apiSwapiPaths';
import { fetchCharacterByName } from '../helpers/people.get.helper';

type People = {
  name: string;
};

type Key = 'R2-D2' | 'C-3PO';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
};

const starWars: Record<Key, People> = {
  'R2-D2': {
    name: 'R2-D2',
  },
  'C-3PO': {
    name: 'C-3PO',
  },
};

test.describe(
  'swapi API testing',
  {
    tag: ['@swapi', '@peopleEndpoint'],
  },
  async () => {
    test(`validates ${starWars['R2-D2'].name} details`, async ({ request }) => {
      let r2d2: Character;
      await test.step(`fetch character by name. Name input: ${starWars['R2-D2'].name}`, async () => {
        r2d2 = await fetchCharacterByName(starWars['R2-D2'].name, request);

        expect(r2d2).toBeDefined();
      });

      await test.step(`assert that  ${starWars['R2-D2'].name}’s skin color is white and blue`, async () => {
        expect(r2d2.skin_color).toBe('white, blue');
      });
    });

    [starWars['C-3PO'], starWars['R2-D2']].forEach(({ name }) => {
      test(`validate multiple requests. Search for: ${name}`, async ({
        request,
      }) => {
        let character: Character;

        await test.step(`fetch character by name. Name input: ${name}`, async () => {
          character = await fetchCharacterByName(`${name}`, request);

          expect(character).toBeDefined();
        });

        await test.step(`validate robot ${name} gender is n/a`, async () => {
          expect(character.gender).toBe('n/a');
        });
      });
    });

    test('validates message 404 Not Found', async ({ request }) => {
      const invalidUrl = `${apiSwapiPaths.peopleApi}/999999/`;
      let response: APIResponse;

      await test.step('send request for invalid character', async () => {
        response = await request.get(invalidUrl);
      });

      await test.step('check status code 404', async () => {
        expect(response.status()).toBe(404);
      });

      await test.step(`check error message "Not Found"`, async () => {
        const errorResponse = await response.json();

        expect(errorResponse.detail).toBe(`Not found`);
      });
    });

    test(`validates message "Method 'POST' not allowed."`, async ({
      request,
    }) => {
      let response: APIResponse;

      await test.step('submit POST request', async () => {
        response = await request.post(apiSwapiPaths.peopleApi, {
          data: { name: 'Luke Skywalker' },
        });
      });

      await test.step('check status code 405', async () => {
        expect(response.status()).toBe(405);
      });

      await test.step(`check error message "Method 'POST' not allowed."`, async () => {
        const errorResponse = await response.json();

        expect(errorResponse.detail).toBe(`Method 'POST' not allowed.`);
      });
    });
  }
);
