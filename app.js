const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/primes", (req, res, next) => {
    const prime = () => {
        let result = "";
        for (let i = 0; i <= 20; i++){
            let composite = false;
            for (let j = 2; j <= i; j++){
                if (i % j === 0 && j !== i){
                    composite = true;
                }
            }
            if (composite === false && i > 1){
                result += i;
            }
        }
        return result;
    }
    res.status(200).send(prime());
});

app.use((req, res, next) => {
    res.status(302).send({
        message: "Welcome, head over to /primes"
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});