import React  from "react"
import SubCategory from "../Components/Subcategory"
export const drinkRecipies= [
    {
    id: 1,
    imgsrc: "media/healthyRecipies/tulsi_kadha.webp", 
    title: "Tulsi-Haldi Kadha Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",
},
    {
    id:2,
    imgsrc: "media/snacksRecipies/kanji-vada.webp", 
    title: "Kaanji Vada Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min",
},
    {
    id:3,
    imgsrc: "media/healthyRecipies/watermelon-dry-fruit-punch.webp", 
    title: "Watermelon & Dry Fruit Punch Recipies",
    recipieServe: "2",
    preTime: "5min",
    cookTime: "5min",
    totaltime: "10min", },

    {
    id:4,
    imgsrc: "media/vegetarianRecipes/plum-date-sharbat-milk.webp", 
    title: "plum & date sharbat milk Recipe",
    recipieServe: "2",
    preTime: "5min",
    cookTime: "5min",
    totaltime: "10min", },
    {
    id:5,
    imgsrc: "media/chickenRecipies/afghani_doogh.webp", 
    title: "Afghani doogh Recipie",
    recipieServe: "1",
    preTime: "10min",
    cookTime: "5min",
    totaltime: "15min", },
    {
    id:6,
    imgsrc: "media/meatRecipies/Mutton Beliram.jpg", 
    title: "Christmas Gluhwein Recipie",
    recipieServe: "9",
    preTime: "5min",
    cookTime: "15min",
    totaltime: "20min",},
    {
    id:7,
    imgsrc: "media/seafoodRecipes/wild_zombie_virus.webp", 
    title: "Wild Zombie Virus Recipie",
    recipieServe: "3",
    preTime: "5min",
    cookTime: "5min",
    totaltime: "10min", },
    {
    id:8,
    imgsrc: "media/riceRecipies/bloody-fairy.jpg", 
    title: "Bloody Fairy Recipie",
    recipieServe: "7",
    preTime: "10min",
    cookTime: "15min",
    totaltime: "25min",},
    {
    id:9,
    imgsrc: "media/breadRecipies/sujeonggwa.webp", 
    title: "Sujeonggwa Recipie",
    recipieServe: "6",
    preTime: "20min",
    cookTime: "25min",
    totaltime: "45min",},
    {
    id:10,
    imgsrc: "media/desserts/turmeric-milk.webp", 
    title: "Turmeric Masala Milk Recipe",
    recipieServe: "5",
    preTime: "5min",
    cookTime: "10min",
    totaltime: "15min",},
    {
    id:11,
    imgsrc: "media/dinnerRecipes/nutriboost_smoothie.webp", 
    title: "Nutriboost Smoothie Recipe",
    recipieServe: "1",
    preTime: "5min",
    cookTime: "5min",
    totaltime: "10min", },
    {
    id:12,
    imgsrc: "media/festivals/immunity_booster_juice.webp", 
    title: "Immunity Booster Juice Recipe",
    recipieServe: "7",
    preTime: "10min",
    cookTime: "10min",
    totaltime: "20min", },
    {
    id:13,
    imgsrc: "media/kidsRecipies/cucumber_kale_spinach_juice.webp", 
    title: "Cucumber, Kale And Spinach Juice Recipe",
    recipieServe: "5",
    preTime: "10min",
    cookTime: "35min",
    totaltime: "45min", },
    {
    id:14,
    imgsrc: "media/winterRecipes/kanji-vada.webp", 
    title: "Kanji Vada Recipe",
    recipieServe: "2",
    preTime: "10min",
    cookTime: "15min",
    totaltime: "25min", },
    {
    id:15,
    imgsrc: "media/Drinks/valencia-fizz.webp", 
    title: "Valencia Fizz Recipe",
    recipieServe: "5",
    preTime: "10min",
    cookTime: "30min",
    totaltime: "40min", },
    
    {
        id:16,
        imgsrc: "media/desserts/badam_ka_kahwa.webp", 
        title: "Badam ka Kahwa Recipe",
        recipieServe: "7",
        preTime: "10min",
        cookTime: "20min",
        totaltime: "30min",},
        {
        id:17,
        imgsrc: "media/dinnerRecipes/dark_night.webp", 
        title: "Dark Night Recipe",
        recipieServe: "9",
        preTime: "10min",
        cookTime: "5min",
        totaltime: "15min", },
        {
        id:18,
        imgsrc: "media/festivals/rose_arrak_mastani.jpg", 
        title: "Rose & Arrak Mastani Recipe",
        recipieServe: "3",
        preTime: "5min",
        cookTime: "45min",
        totaltime: "50min", },
        {
        id:19,
        imgsrc: "media/kidsRecipies/mango_mastani.webp", 
        title: "Mango Mastani Recipe",
        recipieServe: "4",
        preTime: "10min",
        cookTime: "30min",
        totaltime: "40min", },
        {
        id:20,
        imgsrc: "media/winterRecipes/berry_kanji.webp", 
        title: "Berry Kanji Recipe",
        recipieServe: "1",
        preTime: "10min",
        cookTime: "10min",
        totaltime: "20min", },
       
]

export default function Drink(){
    return(
        <>
        <SubCategory data={drinkRecipies}/>
        </>
    )
}