import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: '{PATH} is required',
        },
        thumb: {
            type: String,
            required: true,
        },
        products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    },
    { timestamps: true },
);

const Category = mongoose.model('category', CategorySchema);

export default Category;
