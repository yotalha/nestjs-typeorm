import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test1',
    entities: ['build/**/*.entity.js'],
    synchronize: true,
    logging: true
}

export default config;

// "typeorm": "typeorm-ts-node-commonjs",

