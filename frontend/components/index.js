import { routes } from "../router/routes.js";
const root = document.getElementById("root");

export const changeUrl = async (requestUrl) => {
  history.pushState(null, null, requestUrl);
  root.innerHTML = await routes[requestUrl]();
};

window.addEventListener("popstate", () => changeUrl("/"));

root.innerHTML = routes["/"]();
