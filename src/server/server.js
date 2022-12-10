import express from 'express';
import testRoute from "./routes/test.route.js";
const PORT = process.env.PORT || 3000;

const app = express();


app.use(testRoute)
// app.get('/', (req, res) => {
//     res.send('hello world')
// })

app.listen(PORT, () => console.log('server running on port ' + PORT))



