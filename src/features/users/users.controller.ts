import { Request, Response, NextFunction } from "express";
import userservice from "./users.service";

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await userservice.get(req.params.id));
  } catch (err) {
    console.log("Error while getting list of users", err.message);
    next(err);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await userservice.getAll());
  } catch (err) {
    console.log("Error while getting list of users", err.message);
    next(err);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await userservice.create(req.body));
  } catch (err) {
    console.log("Error while getting list of users", err.message);
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await userservice.update(req.body, req.params.id));
  } catch (err) {
    console.log("Error while getting list of users", err.message);
    next(err);
  }
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json(await userservice.remove(req.params.id));
  } catch (err) {
    console.log("Error while getting list of users", err.message);
    next(err);
  }
};

export default { get, getAll, create, update, remove };
