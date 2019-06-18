import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Owner } from "./Owner";

@Entity()
export class UserReview {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column("datetime")
    created_at

    @ManyToOne(type => User, user => user.userReviews)
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToOne(type => Owner, owner => owner.userReviews)
    @JoinColumn({name: "owner_id"})
    owner: Owner

}