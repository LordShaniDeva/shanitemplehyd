/**
 * Fetch data from an API
 * @param input
 * @param options
 * @returns
 */

async function fetchData<T extends any>(
  input: RequestInfo | URL,
  options?: RequestInit | undefined
) {
  const state = {
    loading: false,
    data: null as T,
    error: null,
  };
  Object.defineProperties(state, {
    loading: {
      value: true,
      writable: true,
    },
  });
  try {
    const data = await fetch(input, options);
    const json = await data.json();

    Object.defineProperties(state, {
      loading: {
        value: true,
        writable: true,
      },
      data: {
        value: json,
        writable: true,
      },
    });
  } catch (error) {
    Object.defineProperties(state, {
      loading: {
        value: false,
        writable: true,
      },
      error: {
        value: error,
        writable: true,
      },
    });
    console.log(error);
  }
  return state;
}

export default fetchData;
