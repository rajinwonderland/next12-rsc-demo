export default async function fetchAcisData(body: any) {
  const res = await fetch("https://data.rcc-acis.org/GridData?", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "content-type": "application/json",
    },
  });
  return await res.json();
}
