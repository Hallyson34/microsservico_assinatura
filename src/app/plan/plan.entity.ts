export class PlanEntity {
  id: number;
  name: string;
  value: number;

  static create(id: number, name: string, value: number): PlanEntity {
    const entity: PlanEntity = new PlanEntity();
    entity.id = id;
    entity.name = name;
    entity.value = value;
    return entity;
  }
}
