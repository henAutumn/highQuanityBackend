const router = require('express').Router();

_createToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
}

router.post('/login', async (req, res) => {
    try {
        const loggedInUser = await User.findOne({ where: { email: userObj.email } })
        const isUser = await bcrypt.compare(userObj.password, loggedInUser.password)

        if (isUser) {
            return res.status(200).send( {
                loggedInUser,
                error: false,
                token: createToken(loggedInUser)
            });
           
        } else {
            return res.status(500).send({
                error: true,
                errorMsg: "Wrong username or password"
            })
        }
    } catch (e) {
        return res.status(500).send({
            error: true,
            errorMsg: "User doesn't exist"
        })
    }
})

module.exports = router;