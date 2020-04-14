import { Request, Response } from "express";
import "reflect-metadata";
import { controller, get } from "./decorator";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

@controller
class LoginController {
  @get("/login")
  login() {}
  @get("/")
  home(req: BodyRequest, res: Response) {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.send(`
      <html>
        <body>
          <a href='/logout'>退出</a>
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
