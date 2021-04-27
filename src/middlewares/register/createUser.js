const createUser = async (req, res) => {
    try {
        const {login, password} = req.body
        
        await User.createUser(new User(login, password))

        res.status(200).json({
            message: ("User successfully created.")
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: ("Internal server error:" + error)
        })
    }
}


module.exports = createUser