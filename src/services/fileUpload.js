import axiosInstance from "../axiosConfig";

export async function fileUpload(file) {
  const formdata = new FormData();
  formdata.append("files", file);

  return axiosInstance.post("/upload", formdata);
}

//For usage refer to https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#upload-files-related-to-an-entry
export async function fileUploadAndLink(file, ref, refId, field) {
  const formdata = new FormData();
  formdata.append("ref", ref);
  formdata.append("refId", refId);
  formdata.append("field", field);
  formdata.append("files", file);

  return axiosInstance.post("/upload", formdata);
}
