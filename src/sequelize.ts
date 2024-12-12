import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: parseInt(process.env.DB_PORT as string),
  }
);

export interface ITest {
  content: string;
}

export class Test extends Model<ITest> {
  public readonly id!: number;
  public content!: string;
}

Test.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Tests",
    tableName: "Tests",
    freezeTableName: true,
    timestamps: true,
    sequelize,
  }
);

export default sequelize;
