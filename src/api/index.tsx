import request from "@/utils/request";

export const getBanner = async () => {
  return await request.get("/banner");
};
