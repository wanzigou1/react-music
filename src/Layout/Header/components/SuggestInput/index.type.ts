// 定义 Artist 类型
interface Artist {
  id: number;
  name: string;
  picUrl: string | null;
  alias: string[];
  albumSize: number;
  picId: number;
  fansGroup: any | null;
  img1v1Url: string;
  img1v1: number;
  trans: string | null;
}

// 定义 Album 类型
interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
}

// 定义 Song 类型
interface Song {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  copyrightId: number;
  status: number;
  alias: string[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl: string | null;
  mark: number;
}

// 定义 Playlist 类型
interface Playlist {
  id: number;
  name: string;
  coverImgUrl: string;
  creator: any | null;
  subscribed: boolean;
  trackCount: number;
  userId: number;
  playCount: number;
  bookCount: number;
  specialType: number;
  officialTags: any | null;
  action: any | null;
  actionType: any | null;
  recommendText: string | null;
  score: any | null;
  description: string;
  highQuality: boolean;
}

// 定义接口返回的类型
export interface SuggestResult {
  albums: Album[];
  artists: Artist[];
  songs: Song[];
  playlists: Playlist[];
  order: string[];
}
