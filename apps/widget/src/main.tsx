import { render } from "preact";
import { App } from "./App";

function getAppDiv() {
  if (import.meta.env.DEV) {
    return document.getElementById("swu") as HTMLDivElement;
  }

  const app = document.createElement("div");
  app.setAttribute("id", "swu");

  const link = document.createElement("link");
  link.href = `${import.meta.env.BASE_URL}style.css`;
  link.type = "text/css";
  link.rel = "stylesheet";

  document.body.append(link);
  document.body.append(app);

  return app;
}

render(<App />, getAppDiv());
