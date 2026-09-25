import { T } from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("You are on home page");
  } catch (error) {
    console.error("Error rendering home page:", error);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("You are on login page");
  } catch (error) {
    console.error("Error rendering login page:", error);
  }
};
memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("You are on signup page");
  } catch (error) {
    console.error("Error rendering signup page:", error);
  }
};

export default memberController;
