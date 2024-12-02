import environmentBaseUrl from './environmentBaseUrl';

export function buildUrl(uiPath: string) {
  const url = `${environmentBaseUrl.production.raketech}${uiPath}/`;

  return url;
}
