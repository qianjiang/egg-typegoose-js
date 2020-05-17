import { Mongoose } from "mongoose";

declare module 'egg' {
    // interface IModel extends sequelize.Sequelize, PlainObject {}
  
    // extend app
    interface Application {
        mongoose: Mongoose;
    }
  
    // extend context
    // interface Context {
    //   model: IModel;
    // }
  
    // extend your config
    // interface EggAppConfig {
    //   sequelize: EggSequelizeOptions | DataSources;
    // }
  }