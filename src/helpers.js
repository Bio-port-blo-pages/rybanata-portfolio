import fsp from 'fs/promises';
import * as fs from 'fs';
import probe from 'probe-image-size';

export async function getImages(dir) {
  try {
    const files = await fsp.readdir(dir);

    return await Promise.all( files.map(async (files) => {
      const label = files;
      let href = dir + files;
      let data = fs.readFileSync(href);
      const size = await probe.sync(data);

      // optional fix for unicode
      href = await encodeURI('illustrations/' + files);
      return { label, href, size };
    }));
  } catch (err) {
    console.error('Error occurred while reading directory:', err)
  }
}