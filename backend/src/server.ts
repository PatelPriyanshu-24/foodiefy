import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from "./data";
const port = 5000;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/food", (req, res) => {
  res.send(sample_foods);
});

app.get("/api/food/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const food = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(food)
});

app.get("/api/food/tag",(req,res)=>{
    res.send(sample_tags)
})

app.get("/api/food/tag/:tagName",(req,res)=>{
    const tagName = req.params.tagName
     const food =sample_foods.filter(food=>food.tags?.includes(tagName))
     res.send(food)
})
app.get("/api/food/:foodId",(req,res)=>{
    const foodId = req.params.foodId
    const food = sample_foods.find(food=>food.id==foodId)
    res.send(food)

})
app.listen(port, () => {
  console.log("your website is working on http://localhost:5000");
});
