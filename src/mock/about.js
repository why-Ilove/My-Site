import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://why-ilove.github.io/resume/src/index.html",
});
