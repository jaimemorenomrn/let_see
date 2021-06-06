const cloudinary = requiere("cloudinary").v2;
const { CloudinaryStorage } = requiere("multer-storage-cloudinary");

// Nombre del archivo?
const CloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "willsee",
  },
});

module.exports = cloudinaryStorage;
