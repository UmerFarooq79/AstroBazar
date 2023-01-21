const router = require ("express").Router();

const KEY = "sk_test_51MMdA1JnRs8RRwTJEqzWdsH3CKzDuZR3uez0XMZdWTx3SeaexSY5oKK7gEJH8RVmQhi7uY6cQwoC7Mun5H0j508n00ENHJ09lH"

const stripe = require("stripe")(KEY)


router.post("/payment", async(req,res)=>{
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "AstroBazar Payments",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment Successful",
            success: true
        })

    } catch (error) {
        console.log("error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})






module.exports = router;