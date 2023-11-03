import { PlanEntity } from './plan.entity';

export default interface PlanRepositoryInterface {
  create(name: string, value: number): Promise<PlanEntity>;
  update(entity: PlanEntity): Promise<PlanEntity>;
  deleteById(id: number): Promise<PlanEntity>;
  findById(id: number): Promise<PlanEntity>;
  findAll(): Promise<PlanEntity[]>;
}
