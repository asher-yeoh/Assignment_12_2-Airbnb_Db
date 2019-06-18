import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { PropertyTag } from "./PropertyTag";
import { PropertyReview } from "./PropertyReview";
import { Rating } from "./Rating";
import { Locality } from "./Locality";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type => Owner, owner => owner.properties)
    @JoinColumn({name: "owner_id"})
    owner: Owner
    
    @Column("datetime")
    created_at

    @Column("datetime")
    updated_at

    @OneToMany(type => Booking, booking => booking.property)
    bookings: Booking[]

    @OneToMany(type => PropertyTag, propertyTag => propertyTag.property)
    propertyTags: PropertyTag[]

    @OneToMany(type => PropertyReview, propertyReview => propertyReview.property)
    propertyReviews: PropertyReview[]

    @OneToMany(type => Rating, rating => rating.property)
    ratings: Rating[]

    @OneToMany(type => Locality, locality => locality.property)
    localities: Locality[]

}