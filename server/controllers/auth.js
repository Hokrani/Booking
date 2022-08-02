import User from '../models/user';
import jwt from 'jsonwebtoken';

export const showMessage = (req, res) => {
    res.status(200).send(req.params.message);
}

export const register = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;

    //field validation
    if (!name) return res.status(400).send("Name is required");
    if (!password || password.length < 6)
        return res.status(400).send("Password is required and it should be min 6 char");
    let userExist = await User.findOne({ email }).exec();
    if (userExist) res.status(400).send("Email id is already exist");

    //register 
    const user = new User(req.body);
    try {
        await user.save();
        console.log("USER IS CREATED", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log('CREATE USER FAILED', err)
        return res.status(400).send("Error, Try again.");
    }


}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }).exec();
        console.log('USER Exist', user)
        if (!user) res.status(400).send('User does not exist');
        //compare password
        user.comparePassword(password, (err, match) => {
            if (!match || err) res.status(400).send("Wrong password");
            // console.log("GENERATE TOKEN AND SEND RESPONSE TO CLIENT");
            const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
                expiresIn: "7d",
            });
            res.json({
                token, user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                }
            });
        })
    } catch (err) {
        console.log('LOGIN Err', err);
        res.status(400).send('Signin failed');
    }
}