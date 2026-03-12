import { RequestHandler, Request, Response } from "express";
import { Company } from "../models/company"; 
import { Service } from "../models/service";
 
export const createCompany: RequestHandler = (req: Request, res: Response) => { 
    if (!req.body)
    {
        return res.status(400).json({
            status: "error",
            message: "Content cannot be empty",
            payload: null,
        });
    }

    const product = { ...req.body };
    Company.create(product)
    .then((data: Company | null) => {
        res.status(200).json({
            status: "success",
            message: "Company successfully created",
            payload: data,
        });
    })
    .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a company. " + err.message,
            payload: null,
        });
    });
 }; 
 
export const getAllCompanies: RequestHandler = (req: Request, res: Response) => { 
    Company.findAll( { include: [Service] } )
    .then((data: Company[]) => {
        return res.status(200).json({
            status: "success",
            message: "Companies successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all companies. " + err.message,
            payload: null,
        });
    });
 }; 
 
export const getCompanyById: RequestHandler = (req: Request, res: Response) => { 
    Company.findByPk(Number(req.params.id), { include: [Service] })
    .then((data: Company | null) => {
        return res.status(200).json({
            status: "success",
            message: "Company successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all companies. " + err.message,
            payload: null,
        });
    });
 }; 
 
export const modifyCompany: RequestHandler = async (req: Request,res: Response) => { 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content cannot be empty.",
            payload: null,
        });
    }

    Company.update({ ...req.body }, { where: { company_id: req.params.id } })
    .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Company successfully updated",
                payload: { ...req.body },
            });
        } else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the company.",
                payload: null,
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a company. " + err.message,
            payload: null,
        });
    });
 }; 
 
export const deleteCompany: RequestHandler = async (req: Request,res: Response) => { 
    const { company_id } = req.body;
    try {
        await Company.destroy({ where: { company_id } });
        res.status(200).json({ message: "Company deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting companies",
            error,
        });
    }
 };