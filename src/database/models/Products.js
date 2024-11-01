import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        productName : {
            type: String,
            require: true,
        },
        image: {
            type: [String],
        },
        category : {
            type: String,
            require: true,
        },
        description : {
            type: String,
            require: true,
        },
        price : {
            type: String,
            require: true,
        },
        quantity : {
            type: String,
            require: true,
        },
        rating : {
            type: String,
            require: false,
        },
        businessName: {
            type: String,
            required: false
        }
    },
    {timestamps: true}
);

export default mongoose.models.Products  || mongoose.model("Products", productSchema)