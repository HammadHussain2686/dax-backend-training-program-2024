import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

// Interface representing a document in MongoDB
export interface IUser {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    status: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    status: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

// Define the schema for the User model
const userSchema: Schema<IUserDocument> = new mongoose.Schema<IUserDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: false, default: 'active' },
    role: { type: String, required: false, default: 'author' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Create the User model
const User: Model<IUserDocument> = mongoose.model<IUserDocument>("User", userSchema);

export default User;
