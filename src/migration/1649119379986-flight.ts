import {MigrationInterface, QueryRunner} from "typeorm";

export class flight1649119379986 implements MigrationInterface {
    name = 'flight1649119379986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "flights" ("id" SERIAL NOT NULL, "origin" character varying(30) NOT NULL, "destination" character varying(30) NOT NULL, "departure_date" TIMESTAMP NOT NULL, "arrival_date" TIMESTAMP NOT NULL, "type" character varying(9) NOT NULL DEFAULT 'roundtrip', "price" numeric(10,2) NOT NULL, CONSTRAINT "PK_c614ef3382fdd70b6d6c2c8d8dd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "flights"`);
    }

}
