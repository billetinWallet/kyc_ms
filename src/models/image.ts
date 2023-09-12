import { prop, getModelForClass } from "@typegoose/typegoose";

class Image {
  @prop({ required: true })
  id_user: string;

  @prop({ required: true })
  url_image: string;

  @prop({ required: true })
  type: string;
}

const ImageModel = getModelForClass(Image);
export default ImageModel;
