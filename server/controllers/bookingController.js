async function BookingController(req, res) {
    require('dotenv').config();
    const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

    // Extract amount and id from request body
    let { amount, id } = req.body;

    // Validate input
    if (!amount || !id) {
        return res.status(400).json({
            message: 'Amount and payment method ID are required.',
            success: false,
        });
    }

    try {
        // Create a payment intent with the specified amount and currency
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Canoe Rental',
            payment_method: id,
            confirm: true,
        });
        
        console.log('Payment', payment);
        
        // Respond with success message
        res.json({
            message: 'Payment successful',
            success: true,
        });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({
            message: 'Payment failed',
            success: false,
            error: error.message // Optionally return error message
        });
    }
}

module.exports = { BookingController };