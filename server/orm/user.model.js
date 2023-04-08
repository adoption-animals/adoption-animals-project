// Define and export the sequelize model that represents the table volunteer.
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
             
         id:{
           type:DataTypes.STRING,
           primaryKey : true,  
         },
        
         name: {
            type: DataTypes.STRING,
            allowNull : false
           },

         email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
            },
   
         image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
           },
   
         phoneNumber: {
            type: DataTypes.STRING 
           },
         verify: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false 
           },
         rate: {
            type: DataTypes.FLOAT, 
            defaultValue: 0 
           },
       }, { timestamps: true });
   
       return user;
     };