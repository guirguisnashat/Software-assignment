import { Product } from "../sharred/Product";


export class Supplier{
    id:string;
    name:string;
    email:string;
    address:string;
    rating:number;
    description:string;
    nation:string;
    phone:string;
    websitedomain:string;
    password:string;
    image:string;
    products:Product[];   
}


export const SUPPLIERS:Supplier[]=[
    {
        id:'abc',
        name:'xyz',
        email:'abc@xyz.com',
        address:'fgh',
        rating:3.5,
        description:'dadasdjk ahkjbfadksf kasjdbadcba adacas',
        nation:'america',
        phone:'0123456789',
        websitedomain:'rew.com',
        password:'rew',
        image:'/assets/images/product_image.jpg',
        products:[
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            },
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            },
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            }
        ]
    },
    {
        id:'abc',
        name:'xyz',
        email:'abc@xyz.com',
        address:'fgh',
        rating:3.5,
        description:'dadasdjk ahkjbfadksf kasjdbadcba adacas',
        nation:'america',
        phone:'0123456789',
        websitedomain:'rew.com',
        password:'rew',
        image:'/assets/images/product_image.jpg',
        products:[
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            },
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            },
            {
                description:'nflnads udjnfad adc ad',
                name:'kaddoda',
                id:'as',
                image:'/assets/images/product_image.jpg'
            }
        ]
    }
]