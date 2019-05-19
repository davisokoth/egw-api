import "reflect-metadata";
import { DBModel } from './db.model';
import { inject, injectable } from 'tsyringe';
import { ESService } from '../services/db.service';

interface IDataHelper {
  insertData(user: DBModel): Promise<void>;
  getData(): Promise<DBModel>;
}

@injectable()
class DataHelper implements IDataHelper {
  public static TableName: string = 'User';
  
  constructor(@inject('ConnectionService') private dbService: ESService) {}

  addData(data: DBModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dbService.insertData<DBModel>(
        data, 
        (result) => {
          resolve(result);
        }
      );
    });
  }

  getData(): Promise<DBModel> {
    return new Promise((resolve, reject) => {
      this.dbService.getData<DBModel>(results => {
          resolve(results);
        }
      );
    });
  }
}

export { DataHelper, IDataHelper };
