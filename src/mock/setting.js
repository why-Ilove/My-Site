import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2549164742,691092989&fm=26&gp=0.jpg",
    siteTitle: "个人中心",
    github: "https://github.com/DuYi-Edu",
    qq: "1617711450",
    qqQrCode:
      "https://z3.ax1x.com/2021/07/15/WuarDJ.png",
    weixin: "qiuweicongnb",
    weixinQrCode:
      "https://z3.ax1x.com/2021/07/15/WuaDu4.jpg",
    mail: "1617711450@qq.com",
    icp: "ICP备11111111号",
    githubName: "why-Ilove",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});