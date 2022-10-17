const { link } = require("fs")
const path = require("path")

module.exports = {
    home: (req, res) => {
        return res.sendFile('index.html', { root: path.join(__dirname, '../game') });
    },




    info: (req, res) => {
        return res.send('this is info page')
    },
    bio: (req, res) => {
        return res.send('Fauzi Amallul')
    },
    getProductById: (req, res) => {
        const id = req.params.id
        return res.send(`id is: ${id}`)
    },
    product: (req, res) => {
        return res.json({
            "id" : 1,
            "name" : "Buku Cerita",
            "price" : 15000
        })
    },
    login: (req, res) => {
        const dummyUser = {
            "email" : "sample@dummy.com",
            "password" : "dummy123"
        }

        if(req.body.email === dummyUser.email && req.body.password --- dummyUser.password){
            return res.json({
                "message" : "Login berhasil",
                "data" : dummyUser
            }, 200)
        }

        return res.json({
            "message" : "Password atau email salah",
            
        }, 400)
    }
} 