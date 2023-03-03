const Base_URL = ``;

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }

  throw new Error("요청에 실패함");
};

export const fetchDummy = async (keyword) =>
  request(`${Base_URL}/dummy?keyword=${keyword}`);
