
export async function handleFile(file) {
  let fileReader = new FileReader();
  let fileName = file.name;
  let fileSize = file.size;
  fileReader.readAsDataURL(file);

  return new Promise((res) => {
    fileReader.addEventListener("load", function () {
      console.log(fileReader);
      res({ data: fileReader.result, fileName: fileName, fileSize: fileSize });
    });
  });
}


