import "preact";
import "preact/compat";

import habitat from "preact-habitat";

import { App } from "./App";

const { render } = habitat(App);

const body = document.getElementsByTagName("body")[0];

if (body) {
  const app = document.createElement("div");
  const link = document.createElement("link");

  app.setAttribute("id", "swu");

  link.href = "https://swu-app-yboxh.ondigitalocean.app/widget/index.css";
  link.type = "text/css";
  link.rel = "stylesheet";

  body.append(link);
  body.append(app);

  render({
    selector: "#swu",
    clean: true,
  });
}
