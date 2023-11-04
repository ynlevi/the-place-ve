import { getPlaiceholder } from "plaiceholder";

export default async function Image64(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new console.error("faild loading image");
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log("OK!!", base64);
    return base64;
  } catch (err) {
    console.error(err);
  }
}
