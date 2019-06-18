import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { PropertyReview } from "./PropertyReview";
import { UserReview } from "./UserReview";
import { Rating } from "./Rating";

@Entity()
export class User {

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

    @OneToMany(type => Booking, booking => booking.user)
    bookings: Booking[]

    @OneToMany(type => PropertyReview, propertyReview => propertyReview.user)
    propertyReviews: PropertyReview[]

    @OneToMany(type => UserReview, userReview => userReview.user)
    userReviews: UserReview[]

    @OneToMany(type => Rating, rating => rating.user)
    ratings: Rating[]

}
