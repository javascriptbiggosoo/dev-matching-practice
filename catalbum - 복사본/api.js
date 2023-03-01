const BASE_URL = `https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/`;

export const request = async (nodeId = "") => {
  try {
    const res = await fetch(BASE_URL + nodeId);

    if (res.ok) {
      const data = await res.json();
      // console.log(data);
      return data;
    }

    throw new Error("서버의 상태가 이상합니다!");
  } catch (err) {
    alert("데이터를 받아오지 못했습니당!");
    throw new Error(`무언가 잘못 되었습니다! ${err.message}`);
  }
};
