import mongoose from 'mongoose';
import mongooseSlugGenerator from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
        },
        thumb: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            default: 'Product',
        },
        slug: { type: String, slug: 'name' },
    },
    { timestamps: true },
);
mongoose.plugin(mongooseSlugGenerator);
ProductSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});

const Product = mongoose.model('product', ProductSchema);

export default Product;
