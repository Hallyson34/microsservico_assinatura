import { LocalDatabase } from '../database/local/localDatabase';
import { PlanEntity } from '../plan/plan.entity';
import PlanRepositoryInterface from '../plan/plan.repository';

export class PlanMockRepository implements PlanRepositoryInterface {
  constructor(private localDatabase = LocalDatabase.createConnection()) {}

  async create(name: string, value: number, description): Promise<PlanEntity> {
    const id = this.localDatabase.plan.getNextId();
    const entity: PlanEntity = PlanEntity.create(id, name, value, description);
    return this.localDatabase.plan.create(entity);
  }

  async update(planEntity: PlanEntity): Promise<PlanEntity> {
    return this.localDatabase.plan.update(planEntity);
  }

  async deleteById(id: number): Promise<PlanEntity> {
    return this.localDatabase.plan.deleteById(id);
  }

  async findById(id: number): Promise<PlanEntity> {
    return this.localDatabase.plan.findById(id);
  }

  async findAll(): Promise<PlanEntity[]> {
    return this.localDatabase.plan.findAll();
  }
}
