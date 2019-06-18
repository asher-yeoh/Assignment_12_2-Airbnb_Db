import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

@Entity()
export class Rating {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column("datetime")
    created_at

    @ManyToOne(type => User, user => user.ratings)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Property, property => property.ratings)
    @JoinColumn({name: "property_id"})
    property: Property

}