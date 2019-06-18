import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";
import { Payment } from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Property, property => property.bookings)
    @JoinColumn({name: "property_id"})
    property: Property

    @Column()
    price: number;

    @Column("datetime")
    booking_date

    @ManyToOne(type => User, user => user.bookings)
    @JoinColumn({name: "user_id"})
    user: User

    @Column("datetime")
    check_in

    @Column("datetime")
    check_out
    
    @Column("datetime")
    created_at

    @Column("datetime")
    updated_at

    @OneToMany(type => Payment, payment => payment.booking)
    payments: Payment[]

}