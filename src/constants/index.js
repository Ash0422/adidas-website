import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

// change thumbnail shoes here
export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

// change statistics here to match Adidas
export const statistics = [
    { value: '2k+', label: 'Brands' },
    { value: '700+', label: 'Shops' },
    { value: '500k+', label: 'Customers' },
];

// change products here to match Adidas
export const products = [
    {
        imgURL: shoe4,
        name: "Adidas NMD",
        price: "$180",
    },
    {
        imgURL: shoe5,
        name: "Adidas Shoe",
        price: "$160",
    },
    {
        imgURL: shoe6,
        name: "Adidas Shoe",
        price: "$130",
    },
    {
        imgURL: shoe7,
        name: "Adidas NMD V1",
        price: "$150",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];
//  change the review here 
export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Daniel Conditt',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Achraf Chibane',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

//  change Footer here to match Adidas
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Yeezy 350", link: "/" },
            { name: "Ultarboost 22 COLD.RDY", link: "/" },
            { name: "Adidas Originals Y-3", link: "/" },
            { name: "Nizza Hi RF 74", link: "/" },
            { name: "Vulc Raid3r Lifestyle", link: "/" },
            { name: "Ultraboost DNA ", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@adidas.com", link: "mailto:customer@adidas.com" },
            { name: "+12345678912", link: "tel:+12345678912" },
        ],
    },
];
 
//  change social Media here to match Adidas
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];