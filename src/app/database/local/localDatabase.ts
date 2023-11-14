import { PlanTable } from './plan.table';
import { SignatureTable } from './signature.table';

export class LocalDatabase {
  static database: LocalDatabase;
  public plan: PlanTable;
  public signature: SignatureTable;

  static createConnection() {
    if (!this.database) {
      this.database = new LocalDatabase();
      this.database.plan = new PlanTable();
      this.database.signature = new SignatureTable();
      return this.database;
    } else {
      return this.database;
    }
  }
}
