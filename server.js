const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const coupons = ["SAVE10", "DISCOUNT20", "OFFER30", "PROMO40"];
let currentIndex = 0;

app.get("/", (req, res) => {
    res.send("Welcome to Coupon System API!");
});

app.get("/claim-coupon", (req, res) => {
    if (currentIndex >= coupons.length) {
        return res.json({ error: "No more coupons available." });
    }
    const coupon = coupons[currentIndex];
    currentIndex++;
    res.json({ coupon });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
