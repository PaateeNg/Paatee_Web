import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        userType: {
            type: String,  // Fixed typo here
            required: true
        },
        category: {
            type: String,
            required: false
        },
        businessName: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        firstName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        x: {
            type: String,
            required: false
        },
        ig: {
            type: String,
            required: false
        },
        terms: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);
