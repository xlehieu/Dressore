import mongoose from 'mongoose';
import mongooseSlugGenerator from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        phone: { type: String, required: true },
        avatar: { type: String },
        address: { type: String },
    },
    {
        timestamps: true,
    },
);
UserSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});
const User = mongoose.model('user', UserSchema);

export default User;
