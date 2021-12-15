export default (results) => {
  return `
  <h2> Rezultati za upit:</h2>
  <table class="searchResults">
    <tr>
      <th>Universty name</th>
      <th>link to web page</th>
    </tr>
    ${results.map((element) => {
      return `
      <tr>
        <td>${element.name}</td>
        <td>${element.web_pages.join(', ')}</td>
      </tr>`;
    })
    .slice(0, 10)
    .join("")}
  </table>
  `;
};
