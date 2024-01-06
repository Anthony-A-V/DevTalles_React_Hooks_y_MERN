export const fileUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/anthony-av/upload';

  const formData = new FormData();
  // if (!file) throw new Error('No tenemos ningún archivo a subir');
  if (!file) return null;
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('No se pudo subir imagen');

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    // console.log(error);
    // throw new Error(error.message);
    return null;
  }
};
