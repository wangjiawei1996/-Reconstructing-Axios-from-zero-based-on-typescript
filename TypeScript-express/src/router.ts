// import fs from "fs";
// import path from "path";
// import { Router, Request, Response, NextFunction } from "express";
// import Crowller from "./utils/crowller";
// import Analyzer from "./utils/analyzer";
// import { getResponseData } from "./utils/util";

// interface BodyRequest extends Request {
//   body: { [key: string]: string | undefined };
// }

// const router = Router();

// router.post("/login", (req: BodyRequest, res: Response) => {
//   const { password } = req.body;
//   const isLogin = req.session ? req.session.login : false;
//   if (isLogin) {
//     res.json(getResponseData(false, "已经登录过了"));
//     res.send("已经登录过");
//   } else {
//     if (password === "123" && req.session) {
//       req.session.login = true;
//       res.json(getResponseData(true));
//     } else {
//       res.json(getResponseData(false, "登录失败"));
//     }
//   }
// });
// router.get("/getData", checkLogin, (req: BodyRequest, res: Response) => {

// });
// router.get("/showData", checkLogin, (req: BodyRequest, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, "../data/course.json");
//     const result = fs.readFileSync(position, "utf 8");
//     res.json(getResponseData(JSON.parse(result)));
//   } catch (e) {
//     res.json(getResponseData(false, "数据不存在"));
//   }
// });
// export default router;
