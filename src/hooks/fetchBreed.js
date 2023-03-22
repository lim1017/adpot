const fetchBreed = async ({ queryKey }) => {
  const animal = queryKey[1].toLowerCase();
  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiRes.ok) {
    throw new Error(`${animal} breed failed`);
  }
  return apiRes.json();
};

export default fetchBreed;
