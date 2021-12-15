export default async (terminPretrage) => {
  let rezSaServera = await fetch(
    `http://universities.hipolabs.com/search?country=${terminPretrage}`
  );
  let rezJSON = rezSaServera.json();
  return rezJSON;
};
