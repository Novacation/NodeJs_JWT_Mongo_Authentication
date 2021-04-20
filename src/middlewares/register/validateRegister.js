const validateRegister = async (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(409).json({
            error: "Credentials invalid."
        })
    }
}