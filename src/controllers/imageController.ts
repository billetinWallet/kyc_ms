import Image from "../models/image";

export const getImages = async (req: any, res: any) => {
  const results = await Image.find();
  res.send(results);
};

export const createImage = async (req: any, res: any) => {
  const image = new Image(req.body);
  await image.save();
  res.send(image);
};

export const getImage = async (req: any, res: any) => {
  const results = await Image.find({ _id: [req.params.id] });
  res.send(results);
};

export const updateImage = async (req: any, res: any) => {
  console.log(req.body);
  await Image.findByIdAndUpdate([req.params.id], req.body);
  res.send(req.body);
};

export const deleteImage = async (req: any, res: any) => {
  console.log(req.body);
  await Image.findByIdAndDelete([req.params.id]);
  res.send("elemento removido");
};

export default {
  getImages,
  createImage,
  getImage,
  updateImage,
  deleteImage,
};
