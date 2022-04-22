const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    { 
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePic : { 
            type: String, 
            required: true,
            default : "https://res.cloudinary.com/dz9yjzkvx/image/upload/v1587667558/default_avatar_vxjh2y.png"
        },
        isAdmin: { type: Boolean,
                    required: true,
                     unique: true
                   },

        },
        {
            versionKey: false,
            timestamps: true,
    }
)
 
userSchema.methods.comparePassword = async function(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await this.hashedPassword(this.password);
    }
    next();

    const salt = await bcrypt.genSalt(2);
    this.password = await bcrypt.hash(this.password, salt);

})

const User = mongoose.model("User", userSchema);

module.exports = User;