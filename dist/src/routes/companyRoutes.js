"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("../controllers/companyController");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/', companyController_1.getAllCompanies);
companyRouter.get('/:id', companyController_1.getCompanyById);
companyRouter.post('/', companyController_1.createCompany);
companyRouter.patch('/:id', companyController_1.modifyCompany);
companyRouter.delete('/', companyController_1.deleteCompany);
exports.default = companyRouter;
//# sourceMappingURL=companyRoutes.js.map