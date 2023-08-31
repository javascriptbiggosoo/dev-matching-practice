const API_END_POINT = `https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/`;

export const request = async (url = "", options = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    // console.log(fullUrl);
    const res = await fetch(fullUrl, options);

    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (err) {
    alert(err.message);
  }
};
