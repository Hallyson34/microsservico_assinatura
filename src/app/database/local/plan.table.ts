import { PlanEntity } from '../../../app/plan/plan.entity';

export class PlanTable {
  private nextId: number = 0;
  private data: PlanEntity[] = [];

  public create(planEntity: PlanEntity): PlanEntity {
    this.data.push(planEntity);
    this.nextId++;
    return planEntity;
  }

  public update(planEntity: PlanEntity): PlanEntity {
    const indexToUpdate = this.data.findIndex(
      (plan) => plan.id === planEntity.id,
    );
    this.data[indexToUpdate] = planEntity;
    return planEntity;
  }

  public deleteById(id: number): PlanEntity {
    const idToRemove = this.data.findIndex((plan) => plan.id === id);
    return this.data.splice(idToRemove, 1)[0];
  }

  public findById(id: number): PlanEntity {
    return this.data[id];
  }

  public findAll(): PlanEntity[] {
    return this.data;
  }

  public getNextId(): number {
    return this.nextId;
  }
}
