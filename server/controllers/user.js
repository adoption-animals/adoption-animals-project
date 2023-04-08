const {User} = require('../orm')


module.exports = {

   getAllUsers : async (req , res) => {
    try {
        const user = await User.findAll({
            order: [["createdAt", "ASC"]],
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
   },

   addUser: async (req, res) => {
    try {
      console.log(req.body);
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },





}