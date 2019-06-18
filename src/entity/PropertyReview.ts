import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

@Entity()
export class PropertyReview {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column("datetime")
    created_at

    @ManyToOne(type => User, user => user.propertyReviews)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Property, property => property.propertyReviews)
    @JoinColumn({name: "property_id"})
    property: Property

}