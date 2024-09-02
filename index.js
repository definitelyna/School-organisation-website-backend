const app = require("express")()
const PORT = 8080;

app.listen(PORT, () => console.log(`It's working on http://localhost:${PORT}`))

app.post("/timetable", (req, res) => {
    res.status(200).send({message: "Timetable sent"})
})

app.get("/timetable", (req,res) => {
    res.status(200).send({ message: "Timetable returned" });
})