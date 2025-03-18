const errorHandler = (err, req, res, next) => {
    console.error('Error caught by middleware:', err);

    if (res && typeof res.status === 'function') {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';

        res.status(statusCode).json({
            error: {
                message,
                status: statusCode,
            },
        });
    } else {
        console.error('Invalid response object in error handler');
        if (typeof next === 'function') {
            next(err);
        }
    }
};

module.exports = errorHandler;