type FileExtension = "jpg" | "png" | "gif";

type ImageURL<T extends FileExtension> = `https://example.com/image.${T}`;

function generateImageURL<T extends FileExtension>(
  fileExtension: T
): ImageURL<T> {
  return `https://example.com/image.${fileExtension}`;
}

const imageUrl1: ImageURL<"jpg"> = generateImageURL("jpg");
const imageUrl2: ImageURL<"png"> = generateImageURL("png");

console.log(imageUrl1);
console.log(imageUrl2);
