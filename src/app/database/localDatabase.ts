import { PlanEntity } from '../plan/plan.entity';

export class LocalDatabase {
  static database: LocalDatabase;
  public plan: Plan;

  static createConnection() {
    if (!this.database) {
      this.database = new LocalDatabase();
      this.database.plan = new Plan();
      return this.database;
    } else {
      return this.database;
    }
  }
}

class Plan {
  private nextId: number = 0;
  private data: PlanEntity[] = [];

  public create(planEntity: PlanEntity): PlanEntity {
    this.data.push(planEntity);
    this.nextId++;
    return planEntity;
  }

  public update(planEntity: PlanEntity): PlanEntity {
    this.data[planEntity.id] = planEntity;
    return planEntity;
  }

  public deleteById(id: number): PlanEntity {
    return this.data.splice(id, 1)[0];
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
