import Layout from "../view/layout.js";
import getResults from "./getResults.js";
import resultsView from "../view/results.js";
import notFoundView from "../view/notFound.js";

export default async () => {
  document.getElementById("app").innerHTML = Layout();
  document.getElementById("search").addEventListener("keyup", async () => {
    document.getElementById('loader').style.display = 'block';
    let Rez = await getResults(event.target.value).then(resp => {
      document.getElementById('loader').style.display = 'none';
      if (resp.length > 0) {
        document.getElementById("results").innerHTML = resultsView(resp);
      } else {
        document.getElementById("results").innerHTML = notFoundView();
      }
    }).catch(err => {
      document.getElementById("results").innerHTML = notFoundView();
    });
  });
};
