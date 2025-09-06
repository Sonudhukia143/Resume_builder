export default function AuthorizeRouter(app) {
    app.get('/api/login', (req, res) => { 
        return res.status(200).json({
            message:"Success Creation In Login"
        })
    });

    app.post('/api/signup', (req, res) => { });

    return app;
}

