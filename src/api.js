// api.js
export async function fetchJobsData() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 500,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();
    return data.jdList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
