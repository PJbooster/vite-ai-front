import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import "./index.css";
import Article, { CardInfo } from "./components/Article.tsx";
import moment from "moment";

const article: CardInfo = {
  author: "Olivia Rhye",
  date: moment(),
  title: "UX review presentations",
  titleContent:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
  tags: [
    { name: "Design", color: "violet" },
    { name: "Research", color: "blue" },
    { name: "Presenation", color: "pink" },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Theme>
      <Container>
        <Article position="vertical" info={article} />
      </Container>
    </Theme>
  </React.StrictMode>
);
