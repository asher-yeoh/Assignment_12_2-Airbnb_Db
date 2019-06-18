import {Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import { Tag } from "./Tag";
import { Property } from "./Property";

@Entity()
export class PropertyTag {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Tag, tag => tag.propertyTags)
    @JoinColumn({name: "tag_id"})
    tag: Tag

    @ManyToOne(type => Property, property => property.propertyTags)
    @JoinColumn({name: "property_id"})
    property: Property

}