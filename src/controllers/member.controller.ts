import { T } from "../libs/types/common";
import { Request, Response } from "express";
import { LoginInput, Member, MemberInput } from "../libs/types/member";

import MemberService from "../model/Member.service";
import Errors from "../libs/Error";
import AuthService from "../model/Auth.service";
const memberService = new MemberService();
const authService = new AuthService();
//React
const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("body:", req.body);
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    console.log(token);

    res.json({ member: result });
  } catch (err) {
    console.error("Error signup page:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    //res.json({member:err})
  }
};
memberController.login = async (req: Request, res: Response) => {
  try {
    const input: LoginInput = req.body;
    const result = await memberService.login(input);
    const token = await authService.createToken(result);
    console.log(token);

    res.json({ member: result, token });
  } catch (err) {
    console.error("Error Login page:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    //res.json({member:err})
  }
};

export default memberController;
