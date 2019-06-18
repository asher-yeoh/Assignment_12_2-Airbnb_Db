import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Locality {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    zipcode: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    region: string;

    @ManyToOne(type => Property, property => property.localities)
    @JoinColumn({name: "property_id"})
    property: Property

}