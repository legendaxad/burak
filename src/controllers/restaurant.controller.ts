import { T } from "../libs/types/common";
import { Request, Response } from "express";
// import  MemberService  from "../model/Member.service";
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
restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    res.send("You are on processSignup page");
  } catch (error) {
    console.error("Error  processSignup page:", error);
  }
};

export default restaurantController;
