import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "fqrftagr",
  api_key: "362369281755125",
  api_secret: "sKv2ZcbBM9eFhw5XRehkIg0ymn0",
});

cloudinary.api
  .ping()
  .then(console.log)
  .catch(console.error);