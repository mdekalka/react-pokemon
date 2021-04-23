const API_URL = 'https://pokeapi.co/api/v2';

const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

const createUrl = (path: string) => {
  // Pokemon API sends full-formatted URL inside response, so in this cases we don't need
  // to use default URL and just rely on what we got from path.
  if (path.includes(API_URL)) return path;

  return `${API_URL}${path}`; 
}

export const httpRequest = async (path: string, options?: RequestInit) => {
  const requestUrl = createUrl(path);
  const requestOptions = { ...defaultOptions, ...options };

  let responseData = null;

  try {
    const response = await fetch(requestUrl, requestOptions);
    const data = await response.json();

    responseData = { data, error: null, responseDate: Date.now() };

    return responseData;
  } catch(e) {
    console.log('fetched failed with', e.message);

    responseData = { data: null, error: e, responseDate: Date.now() }

    return responseData;
  }
}
