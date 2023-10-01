import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id: string

    @Column()
    user: string

    @Column()
    password: string

    @Column()
    email: string
}