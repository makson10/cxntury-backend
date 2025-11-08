import { Sequelize } from 'sequelize-typescript';
import * as entities from '@/common/entities';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.DATABASE_URL!);
      sequelize.addModels([...Object.values(entities)]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
