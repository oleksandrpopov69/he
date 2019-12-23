export const parseResult = async (response: Object) => {
  let result;
  try {
    result = await response.json();
  } catch (e) {
    const error = {};
    error.message = 'error.API.parseResult';
    throw error;
  }

  if (!response.ok) {
    const error = {};
    error.status = response.status;
    error.message = result.message;
    throw error;
  }

  return result;
};

export const sfetch = async ({
  method,
  url,
  body,
}: {
  method: 'GET' | 'POST',
  url: string,
  body: ?Object,
}) => {
  const headers: {[key: string]: string} = {
    Accept: 'application/json',
    'Content-Type': 'application/json charset=utf-8',
  };
  // if (token) headers.Authorization = token;

  const request: {[key: string]: any} = {
    method,
    headers,
    credentials: 'include',
  };
  if (body) {
    request.body = JSON.stringify(body);
  }

  return fetch(url, request);
};

export const sget = ({url}: {url: string}) =>
  sfetch({method: 'GET', url, body: null});
export const spost = ({url, body}: {url: string, body: Object}) =>
  sfetch({method: 'POST', url, body});
