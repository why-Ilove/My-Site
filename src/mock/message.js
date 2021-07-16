import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "https://img2.baidu.com/it/u=3834396650,2600895298&fm=26&fmt=auto&gp=0.jpg",
      "https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg",
      "https://img1.baidu.com/it/u=3254254623,2492769581&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=2169712756,999773750&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=4029696065,2306069402&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=3577691567,3678877448&fm=26&fmt=auto&gp=0.jpg",
      "https://img2.baidu.com/it/u=1194131577,2954769920&fm=26&fmt=auto&gp=0.jpg",
      "https://img1.baidu.com/it/u=2242691666,1092438299&fm=26&fmt=auto&gp=0.jpg",
      "https://img2.baidu.com/it/u=1015870168,713331757&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://img2.baidu.com/it/u=3834396650,2600895298&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=3743808697,1317355772&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=3254254623,2492769581&fm=26&fmt=auto&gp=0.jpg",
            "https://img0.baidu.com/it/u=2169712756,999773750&fm=26&fmt=auto&gp=0.jpg",
            "https://img0.baidu.com/it/u=4029696065,2306069402&fm=26&fmt=auto&gp=0.jpg",
            "https://img0.baidu.com/it/u=3577691567,3678877448&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=1194131577,2954769920&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=2242691666,1092438299&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=1015870168,713331757&fm=26&fmt=auto&gp=0.jpg",
            "https://img0.baidu.com/it/u=1716721135,2895080340&fm=26&fmt=auto&gp=0.jpg",
          ],
        },
      ],
    },
  });
});
