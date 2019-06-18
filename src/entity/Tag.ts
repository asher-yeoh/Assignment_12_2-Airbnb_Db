import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { PropertyTag } from "./PropertyTag";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(type => PropertyTag, propertyTag => propertyTag.tag)
    propertyTags: PropertyTag[]

}
