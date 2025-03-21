const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
    res.json({ message: "hi" });
});
app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.json({ error: "Name is required." });
    }
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});


const PORT = 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
