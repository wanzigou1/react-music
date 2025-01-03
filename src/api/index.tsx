import request from "@/utils/request";
import { SuggestResult } from "@/Layout/Header/components/SuggestInput/type";
// 获取轮播图
export const getBanner = async () => {
  return await request.get("/banner");
};
// 获取搜索建议
export const getSuggest = async (params: {
  keywords: string;
}): Promise<SuggestResult> => {
  const response = await request.get("/search/suggest", { params });
  return response.result;
};
export const getLyric = async (params: { id: string }) => {
  return await request.get("/lyric", { params });
};
