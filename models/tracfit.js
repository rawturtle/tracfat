const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
// Create Schema

const UserSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "can't be blank"],
    },
    email: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true,
        validate: {
            validator: function(email) {
                return User.findOne({email: email}).then(function(result){
                    return result === null;
               });
            },
            message: 'Email account already in use.'
        }
    },
    password: {
        type: String,
        required: [true, "can't be blank"], 
    },
    created: {
        type: Date,
        default: Date.now
    }
})
//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  })

let User = mongoose.model('User', UserSchema)

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['timed', 'reps'],
        required: true,
    },
    time: {
        type: Number,
    },
    reps: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
});

let Exercise = mongoose.model('exercise', ExerciseSchema);

module.exports = {
    User,
    Exercise,
}