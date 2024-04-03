import { TOKEN } from "@/constants";
import { Storage } from "@/utils/storage";

export const prepareHeaders = async (headers: Headers) => {
  const token = await Storage.getData(TOKEN);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};
