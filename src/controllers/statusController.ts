import Status from "../models/status";

export const getAllStatus = async (req: any, res: any) => {
  const results = await Status.find();
  res.send(results);
};

export const createStatus = async (req: any, res: any) => {
  const status = new Status(req.body);
  await status.save();
  res.send(status);
};

export const getStatus = async (req: any, res: any) => {
  const results = await Status.find({ _id: [req.params.id] });
  res.send(results);
};

export const updateStatus = async (req: any, res: any) => {
  console.log(req.body);
  await Status.findByIdAndUpdate([req.params.id], req.body);
  res.send(req.body);
};

export const deleteStatus = async (req: any, res: any) => {
  console.log(req.body);
  await Status.findByIdAndDelete([req.params.id]);
  res.send("elemento removido");
};

export default {
  getAllStatus,
  createStatus,
  getStatus,
  updateStatus,
  deleteStatus,
};
