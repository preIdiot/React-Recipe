import React from 'react';
import SubCategory from '../Components/Subcategory';
export const BreakfastRecipies=[
    {
    id: 1,
    imgsrc: "../image/BreakfastRecipies/aloo-poha.webp", 
    title: "Aloo Poha Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",
},
    {
    id:2,
    imgsrc: "../image/BreakfastRecipies/sindhi-dal-toast.webp", 
    title: "Sindhi Dal Toast Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",
},
    {
    id:3,
    imgsrc: "../image/BreakfastRecipies/sooji-toast.webp", 
    title: "No bread sooji toast Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min", },

    {
    id:4,
    imgsrc: "../image/BreakfastRecipies/egg-muffins.webp", 
    title: "Egg Muffins Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min", },
    {
    id:5,
    imgsrc: "../image/BreakfastRecipies/gpsy-toast.webp", 
    title: "Gypsy Toast Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min", },
    {
    id:6,
    imgsrc: "../image/BreakfastRecipies/dosa.webp", 
    title: "Bajra Dosa Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",},
    {
    id:7,
    imgsrc: "../image/BreakfastRecipies/Fish tikka.jpg", 
    title: "Banana Coconut Idli Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min", },
    {
    id:8,
    imgsrc: "../image/BreakfastRecipies/mango_smoothie.webp", 
    title: "Oats Mango Smoothie Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",},
    {
    id:9,
    imgsrc: "../image/BreakfastRecipies/litchi-spinach-smoothie.webp", 
    title: "Litchi Spinach Smoothie Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",},
    {
    id:10,
    imgsrc: "../image/BreakfastRecipies/nutriboost_smoothie.webp", 
    title: "Nutriboost Smoothie Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",},
    {
    id:11,
    imgsrc: "../image/BreakfastRecipies/ghavan.webp", 
    title: "Ghavan Recipe",
    recipieServe: "1",
    preTime: "15min",
    cookTime: "25min",
    totaltime: "40min", },
    {
    id:12,
    imgsrc: "../image/BreakfastRecipies/almond_strawberry_cream.webp", 
    title: "Almond Strawberry Cream Recipe",
    recipieServe: "6",
    preTime: "10min",
    cookTime: "25min",
    totaltime: "35min", },
    {
    id:13,
    imgsrc: "/../image/BreakfastRecipies/stuffed_ravioli.webp", 
    title: "Stuffed Ravioli Recipe",
    recipieServe: "5",
    preTime: "10min",
    cookTime: "15min",
    totaltime: "25min", },
    {
    id:14,
    imgsrc: "../image/BreakfastRecipies/tricolor_pasta.webp", 
    title: "Tricolour Pasta Recipe",
    recipieServe: "3",
    preTime: "5min",
    cookTime: "15min",
    totaltime: "20min", },
    {
    id:15,
    imgsrc: "../image/BreakfastRecipies/tricolor_macaroons.webp", 
    title: "Tricolor Macaroons Recipe",
    recipieServe: "9",
    preTime: "10min",
    cookTime: "25min",
    totaltime: "35min", },
    
    {
        id:16,
        imgsrc: "../image/BreakfastRecipies/christmas_cookies.webp", 
        title: "Christmas Cookies Recipe",
        recipieServe: "2",
        preTime: "10min",
        cookTime: "10min",
        totaltime: "20min",},
        {
        id:17,
        imgsrc: "../image/BreakfastRecipies/japanese.webp", 
        title: "Japanese Curry Arancini With Barley Salsa Recipe",
        recipieServe: "6",
        preTime: "15min",
        cookTime: "15min",
        totaltime: "30min", },
        {
        id:18,
        imgsrc: "../image/BreakfastRecipies/cocount_salad.webp", 
        title: "Coconut Lime Quinoa Salad Recipe",
        recipieServe: "3",
        preTime: "10min",
        cookTime: "30min",
        totaltime: "40min", },
        {
        id:19,
        imgsrc: "../image/BreakfastRecipies/strawberry_parfait.webp", 
        title: "Strawberry Parfait Recipe",
        recipieServe: "8",
        preTime: "10min",
        cookTime: "15min",
        totaltime: "25min", },
        {
        id:20,
        imgsrc: "../image/BreakfastRecipies/watermelon_strawberry_smoothie.webp", 
        title: "Watermelon and Strawberry Smoothie Recipe",
        recipieServe: "9",
        preTime: "10min",
        cookTime: "20min",
        totaltime: "30min", },
       
]


export default function BreakFast(){
    return(
        <>
        <SubCategory data={BreakfastRecipies}/>
        </>
    )
}