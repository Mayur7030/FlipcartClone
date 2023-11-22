import User from "../model/user-schema.js";

export const usersignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "Username already exist." });
    }
    const user = request.body;
    const newuser = new User(user);
    await newuser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
    console.log("usersignup error", error);
  }
};
