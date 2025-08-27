export type Post = {
_id?: string;
featured_image?: string; // server file path
Name: string;
content: string;
price: number;
discounted_price?: number;
status: '0' | '1';
section: 'Popular' | 'Recommended' | 'New_Arrival' | 'Top_Seller';
};


export type MainCategory = {
_id?: string;
Name: string;
Image?: string;
};


export type SubCategory = {
_id?: string;
main_category: string; // id
Name: string;
Image?: string;
product_name?: string;
price?: number;
discount_price?: number;
Description?: string;
product_information?: string;
};


export type Blog = {
_id?: string;
title: string;
image?: string;
content: string;
author?: string;
date?:string
};