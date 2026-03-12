import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Company } from './company';
interface ServiceAttributes {
    service_id: number;
    name: string;
    description: string;
    company_id: number;
    company: Company;
}
interface ServiceCreationAttributes extends Optional<ServiceAttributes, 'service_id'> {
}
export declare class Service extends Model<ServiceAttributes, ServiceCreationAttributes> {
    service_id: number;
    name: string;
    description: string;
    company_id: number;
    company: Company | null;
}
export {};
//# sourceMappingURL=service.d.ts.map