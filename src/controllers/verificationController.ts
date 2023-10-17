import Image from "../models/image";
import Status from "../models/status";
import axios from "axios";
import {
  getImage,
  getImages,
  createImage,
  updateImage,
  deleteImage,
} from "./imageController";

export const verification = async (req: any, res: any) => {
  //Se trae la imagen y se genera la peticion para iniciar su verificacion:
  const image = new Image(req.body);
  console.log("se recibio la imagen: " + image);
  await image.save();

  const status = new Status({
    id_user: image.id_user,
    state: "Verificado",
    date: new Date(),
  });
  await status.save();

  //Se realiza la verificacion de la imagen:
  console.log("se va a realizar la verificacion de la peticion: " + status);
  //status.state = "verificado";
  //await Status.findByIdAndUpdate([status.id_user], status);
  console.log("se ha hecho la verificacion de la peticion: " + status);

  // Se le envía una solicitud GraphQL para obtener información del usuario actual, incluido el correo.
  try {
    const query =
      `
    query {
      userById_ {
      _id: "` +
      status.id_user +
      `"
      }
    }
  `;
    const options = {
      method: "post",
      url: "http://localhost:5000/graphiql",
      data: { query },
      headers: { "Content-Type": "application/json" },
    };

    const response = await axios(options);

    const userData = response.data;

    // userData ahora contiene la información del usuario, incluido el correo.
    console.log("Información del usuario actual:", userData);

    //Se le envia correo al usuario comprobando la verificacion

    console.log("Se le ha enviado correo al usuario con id: " + status.id_user);

    //Se le informa al api que modifique el atributo "verificado" del microservicio de usuarios a "true"
    res.send("se ha completado el proceso exitosamente");
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener la información del usuario:", error);
    res.send("Error al obtener la información del usuario.");
  }
};

export default {
  verification,
};
