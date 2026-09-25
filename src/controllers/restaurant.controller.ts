import { T } from "../libs/types/common";
import { Request, Response } from "express";
// import  MemberService  from "../model/Member.service";
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("You are on home page");
  } catch (error) {
    console.error("Error rendering home page:", error);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("You are on login page");
  } catch (error) {
    console.error("Error rendering login page:", error);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("You are on signup page");
  } catch (error) {
    console.error("Error rendering signup page:", error);
  }
};

export default restaurantController;
