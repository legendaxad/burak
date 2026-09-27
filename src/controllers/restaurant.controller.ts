import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../model/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enums";
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("You are on home page");
  } catch (error) {
    console.error("Error  home page:", error);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("You are on login page");
    // send | json |redirect | end | render
  } catch (error) {
    console.error("Error  login page:", error);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("You are on signup page");
  } catch (error) {
    console.error("Error  signup page:", error);
  }
};
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    res.send("You are on processLogin page");
  } catch (error) {
    console.error("Error  processLogin page:", error);
  }
};
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("body:", req.body);
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.error("Error  processSignup page:", err);
    res.send(err);
  }
};

export default restaurantController;
