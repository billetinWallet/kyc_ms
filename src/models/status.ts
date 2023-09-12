import { prop, getModelForClass } from "@typegoose/typegoose";

class Status {
  @prop({ required: true })
  id_user: string;

  @prop({ required: true })
  state: string;

  @prop({ required: true })
  date: Date;
}

const StatusModel = getModelForClass(Status);
export default StatusModel;
