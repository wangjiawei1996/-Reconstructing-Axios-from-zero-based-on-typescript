import { Request, Response } from "express";
import "reflect-metadata";
import { controller, get, post } from "./decorator";
import { getResponseData } from "../utils/util";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

@controller
class LoginController {
  @post("/login")
  login(req: BodyRequest, res: Response) {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.json(getResponseData(false, "已经登录过了"));
      res.send("已经登录过");
    } else {
      if (password === "123" && req.session) {
        req.session.login = true;
        res.json(getResponseData(true));
      } else {
        res.json(getResponseData(false, "登录失败"));
      }
    }
  }
  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true));
  }
  @get("/")
  home(req: BodyRequest, res: Response) {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.send(`
      <html>
        <body>
          <a href='/logout'>退出登录</a>
          <a href='/getData'>爬取内容</a>
          <a href='/showData'>展示内容</a>
        </body>
      </html>
    `);
    } else {
      res.send(`
      <html>
        <body>
          <form method='post' action='/login'>
            <input type="password" name="password" />
            <button>登录</button>
          </form>
        </body>
      </html>
    `);
    }
  }
}
