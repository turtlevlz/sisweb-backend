import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Service } from './service';
interface CompanyAttributes {
    company_id: number;
    name: string;
    description: string;
    email: string;
    contact: string;
    contact_name: string;
    tier: number;
    services: Service[];
}
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'company_id'> {
}
export declare class Company extends Model<CompanyAttributes, CompanyCreationAttributes> {
    company_id: number;
    name: string;
    description?: string;
    email: string;
    contact: string;
    contact_name: string;
    tier: number;
    services: Service[];
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=company.d.ts.map