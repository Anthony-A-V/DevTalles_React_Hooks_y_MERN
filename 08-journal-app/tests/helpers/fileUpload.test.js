import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'anthony-av',
  api_key: '494438773898823',
  api_secret: 'u3BQKvcc01eUfLzO2y9zV3tjsDQ',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl =
      'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    // console.log(url);
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');

    const cloudResp = await cloudinary.api.delete_resources(
      ['journal/' + imageId],
      {
        resource_type: 'image',
      }
    );
    // console.log({ cloudResp });
  });

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
