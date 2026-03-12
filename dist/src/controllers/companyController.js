"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompany = exports.modifyCompany = exports.getCompanyById = exports.getAllCompanies = exports.createCompany = void 0;
const company_1 = require("../models/company");
const service_1 = require("../models/service");
const createCompany = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content cannot be empty",
            payload: null,
        });
    }
    const product = Object.assign({}, req.body);
    company_1.Company.create(product)
        .then((data) => {
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
exports.createCompany = createCompany;
const getAllCompanies = (req, res) => {
    company_1.Company.findAll({ include: [service_1.Service] })
        .then((data) => {
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
exports.getAllCompanies = getAllCompanies;
const getCompanyById = (req, res) => {
    company_1.Company.findByPk(Number(req.params.id), { include: [service_1.Service] })
        .then((data) => {
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
exports.getCompanyById = getCompanyById;
const modifyCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content cannot be empty.",
            payload: null,
        });
    }
    company_1.Company.update(Object.assign({}, req.body), { where: { company_id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Company successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
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
});
exports.modifyCompany = modifyCompany;
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { company_id } = req.body;
    try {
        yield company_1.Company.destroy({ where: { company_id } });
        res.status(200).json({ message: "Company deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting companies",
            error,
        });
    }
});
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=companyController.js.map