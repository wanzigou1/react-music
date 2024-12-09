import request from "@/utils/request";

// 获取轮播图
export const getBanner = async () => {
  return await request.get("/banner");
};
// 获取搜索建议
export const getSuggest = async (params) => {
  console.log(params);
  return await request.get("/search/suggest", { params });
};
