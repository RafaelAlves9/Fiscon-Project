export interface User {
    id: number
    name: string
    category: string
    state: string
    price: number
    disponible: number
    creationDate: Date
    updationDate: Date
    promotion: boolean
}
export interface loginUser {
    id: number
    email: string
    password: any
}