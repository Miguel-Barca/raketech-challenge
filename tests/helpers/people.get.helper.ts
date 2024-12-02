import { APIRequestContext, expect } from '@playwright/test';
import apiSwapiPaths from '../utils/apiSwapiPaths';

const requestUrLPeople = apiSwapiPaths.peopleApi;

/**
 * Fetches a character by name.
 *
 * This function sends a GET request to the SWAPI people endpoint with a search query for the provided name.
 * If the character is found, it returns the first character from the results.
 *
 * @param name - The name of the character to search for (e.g., 'R2-D2').
 * @param request - The Playwright APIRequestContext used to make the API request.
 *
 * @throws Error - Throws an error if the character is not found or if the API response is not successful.
 *
 * @returns A Promise that resolves to the Character object if the character is found.
 */
export async function fetchCharacterByName(
  name: string,
  request: APIRequestContext
): Promise<any> {
  try {
    const response = await request.get(requestUrLPeople, {
      params: { search: name },
    });

    if (!response.ok()) {
      throw new Error(`API request failed with status ${response.status()}`);
    } else {
      expect(response.status()).toBe(200);
    }

    const data = await response.json();

    const character = data.results[0];
    if (!character) {
      throw new Error(`Character "${name}" not found.`);
    }

    return character;
  } catch (error) {
    console.error(`Error fetching character "${name}": ${error.message}`);
    throw error;
  }
}
