import express from 'express'


const app = express();
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// })

// get a list of jokes devices
app.get('/api/jokes', (req, res) => {
    const jokes =[
            {
              "id": 1,
              "first_name": "Dunn",
              "last_name": "Salsbury",
              "email": "dsalsbury0@soundcloud.com",
              "gender": "Male",
              "ip_address": "248.63.229.235"
            },
            {
              "id": 2,
              "first_name": "Konstance",
              "last_name": "Mereweather",
              "email": "kmereweather1@123-reg.co.uk",
              "gender": "Female",
              "ip_address": "60.216.236.66"
            },
            {
              "id": 3,
              "first_name": "Patty",
              "last_name": "Hearsey",
              "email": "phearsey2@slate.com",
              "gender": "Male",
              "ip_address": "225.91.114.148"
            },
            {
              "id": 4,
              "first_name": "Sheryl",
              "last_name": "Rigmond",
              "email": "srigmond3@mtv.com",
              "gender": "Polygender",
              "ip_address": "68.196.209.83"
            },
            {
              "id": 5,
              "first_name": "Elaina",
              "last_name": "Handscombe",
              "email": "ehandscombe4@cisco.com",
              "gender": "Female",
              "ip_address": "35.64.58.40"
            },
            {
              "id": 6,
              "first_name": "Reina",
              "last_name": "Cortez",
              "email": "rcortez5@amazon.com",
              "gender": "Female",
              "ip_address": "105.253.29.217"
            },
            {
              "id": 7,
              "first_name": "Bucky",
              "last_name": "Spurr",
              "email": "bspurr6@businessinsider.com",
              "gender": "Male",
              "ip_address": "46.243.190.62"
            },
            {
              "id": 8,
              "first_name": "Rustie",
              "last_name": "Wilce",
              "email": "rwilce7@army.mil",
              "gender": "Male",
              "ip_address": "82.22.123.223"
            },
    ]
    res.send(jokes)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})