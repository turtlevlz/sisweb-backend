import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, HasMany, BelongsTo, PrimaryKey} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Service } from './service';

interface CompanyAttributes{ 
  company_id: number; 
  name: string;
  description: string; 
  email: string;
  contact: string;
  contact_name: string;
  tier: number;
  services: Service[];
} 

interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'company_id'>{} 

@Table ({
  tableName: "Companies" 
}) 
export class Company extends Model<CompanyAttributes, CompanyCreationAttributes>{ 
   @PrimaryKey
   @Column
   company_id!: number;

  @Column 
   name!: string; 

   @Column({ 
      type: DataType.STRING 
   }) 
   description?: string; 

   @Column 
   email!: string;

   @Column 
   contact!: string;

   @Column 
   contact_name!: string;

   @Column 
   tier!: number; 

   @HasMany(() => Service)
   services!: Service[];

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date;
} 