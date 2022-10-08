const jwt =  require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('token', token); //working
        const decodedToken = jwt.verify(token, 'RANDOM_VERY_LONG_VERY_CRYPTIC_TOKEN'); 
        console.log('decoded token', decodedToken);//working
        const userId = decodedToken.userId; 
        console.log('backend userId', userId); //working
        //every subsequent piece of middleware, we'll get userId from the token
        req.auth = { userId: userId }
        if (req.body.userId && req.body.userId !== userId) {
           throw 'Invalid user ID';
        } else {
           next();
        }
    } catch {
       res.status(401).json({
           errorMsg: 'invalid request!'
       });
    }
};

