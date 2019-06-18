import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Property } from "./Property";
import { UserReview } from "./UserReview";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column("datetime")
    created_at

    @Column("datetime")
    updated_at

    @OneToMany(type => Property, property => property.owner)
    properties: Property[]

    @OneToMany(type => UserReview, userReview => userReview.owner)
    userReviews: UserReview[]

}
