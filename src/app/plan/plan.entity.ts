export class PlanEntity {
  id: number;
  name: string;
  value: number;
  description: string;

  static create(
    id: number,
    name: string,
    value: number,
    description: string,
  ): PlanEntity {
    const entity: PlanEntity = new PlanEntity();
    entity.id = id;
    entity.name = name;
    entity.value = value;
    entity.description = description;
    return entity;
  }
}
