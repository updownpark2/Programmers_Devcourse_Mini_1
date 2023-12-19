import { routes } from "../router/routes.js";
const root = document.getElementById("root");

export const changeUrl = (requestUrl) => {
  history.pushState(null, null, requestUrl);
  root.innerHTML = routes[requestUrl]();
};

window.addEventListener("popstate", () => changeUrl("/"));

root.innerHTML = routes["/"]();
