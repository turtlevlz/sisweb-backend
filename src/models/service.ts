import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, HasMany, BelongsTo, PrimaryKey} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Company } from './company';

interface ServiceAttributes{
  service_id: number;
  name: string;
  description: string;
  company_id: number;
  company: Company;
}

interface ServiceCreationAttributes extends Optional<ServiceAttributes, 'service_id'>{}

@Table ({
  tableName: "Services"
})
export class Service extends Model<ServiceAttributes, ServiceCreationAttributes>{
  @PrimaryKey
  @Column
  service_id!: number;

  @Column
  name!: string;

  @Column
  description!: string;

  @ForeignKey(() => Company)
  @Column
  company_id!: number;

  @BelongsTo(() => Company)
  company!: Company | null
}