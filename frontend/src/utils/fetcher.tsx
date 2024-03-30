export const fetcher = (url: string | URL | Request) => fetch(url).then(r => r.json())
