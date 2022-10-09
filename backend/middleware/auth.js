const jwt =  require('jsonwebtoken');
/*
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('token', token); //working
        const decodedToken = jwt.verify(token, 'RANDOM_VERY_LONG_VERY_CRYPTIC_TOKEN'); 
        console.log('decoded token', decodedToken);//working
        const userId = decodedToken.userId; 
        console.log('backend userId', userId); //working
        //if (req.body.userId && req.body.userId !== userId)
        console.log('req user id', req.body.userId); 
        //console.log('req user id', req.data.args.userId); 
        let requestUserId = req.body.userId || req.data.args.userId;
        //if req.body has userId check if it is the same as userID
        //from token = invalid req.
        if (requestUserId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            errorMsg: 'invalid request!'
        });
    }
}
*/
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('token', token); //working
        const decodedToken = jwt.verify(token, 'RANDOM_VERY_LONG_VERY_CRYPTIC_TOKEN'); 
        console.log('decoded token', decodedToken);//working
        const userId = decodedToken.userId; 
        console.log('backend userId', userId); //working
        //every subsequent piece of middleware, we'll get userId from the token
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

