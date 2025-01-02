const orderService = require('../services/orderService')                      // getting orderService

async function getAllOrders(req, res) {
    try {
        const filters = req.query;                                                                  // getting filters
        const orders = await orderService.getAllOrders(filters);

        if (!orders || orders.length === 0) {
            return res.json({ success: false, error: 'Orders not found' });            // Error 404 Products table Not Found
        }

        res.json({ success: true, orders });                                                      // returning answer as json with table
    } catch (error) {
        console.error('Error during getting products: ', error);
        res.status(500).json({ success: false, error: error.message });                             // 500 Internal Server Error
    }
}

module.exports = { getAllOrders };