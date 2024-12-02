import { APIRequestContext } from '@playwright/test';

export async function fetchAllCharacters(
  apiContext: APIRequestContext,
  requestUrl: string
) {
  let allResults = [];
  try {
    while (requestUrl) {
      const response = await apiContext.get(requestUrl);

      if (!response.ok()) {
        throw new Error(
          `Failed to fetch characters: HTTP ${response.status()} - ${response.statusText()}`
        );
      }

      const data = await response.json();

      allResults = allResults.concat(data.results);
      requestUrl = data.next;
    }

    return allResults;
  } catch (error) {
    console.error(`Error fetching characters: ${error.message}`);
  }
}

export async function fetchByName(
  apiContext: APIRequestContext,
  name: string,
  requestUrl: string
) {
  try {
    let result;

    const response = await apiContext.get(requestUrl, {
      params: { search: name },
    });

    if (!response.ok()) {
      throw new Error(
        `Failed to fetch character by name "${name}": HTTP ${response.status()} - ${response.statusText()}`
      );
    }

    result = await response.json();

    return result;
  } catch (error) {
    console.error(
      `Error fetching character by name "${name}": ${error.message}`
    );
    return [];
  }
}
