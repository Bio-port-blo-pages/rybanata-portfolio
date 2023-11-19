import fsp from 'fs/promises';
import * as fs from 'fs';
import probe from 'probe-image-size';

export async function getImages(dir) {
  // dir = 'public/' 
  try {
    const files = await fsp.readdir('public/' + dir);

    return await Promise.all( files.map(async (files) => {
      const label = files;
      let href = 'public/' + dir + files;
      let data = fs.readFileSync(href);
      const size = await probe.sync(data);

      // optional fix for unicode
      href = await encodeURI('/' + dir + files);
      return { label, href, size };
    }));
  } catch (err) {
    console.error('Error occurred while reading directory:', err)
  }
}