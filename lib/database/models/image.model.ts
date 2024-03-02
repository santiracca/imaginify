import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number; // Optional as it's not marked required in the schema
  height?: number; // Optional as it's not marked required in the schema
  config?: object; // Optional as it's not marked required in the schema
  transformationUrl?: string; // Optional as it's not marked required in the schema
  aspectRatio?: string; // Optional as it's not marked required in the schema
  color?: string; // Optional as it's not marked required in the schema
  prompt?: string; // Optional as it's not marked required in the schema
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming this will be the ObjectId in string format
  createdAt?: Date; // Optional as it has a default value
  updatedAt?: Date; // Optional as it has a default value
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformation: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
