import { Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

export class Meeting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zoomUrl: string;

    @ManyToMany(() => Employee, employee => employee.meetings)
    attendees: Employee[];
}