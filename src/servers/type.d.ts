import type Recommend from "@/components/recommend.vue";

export interface Item {
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE"
}

export interface responseItem {
  list: any[];
  playlists: any;
  code: number;
  message?: string;
  data:AnyObject;
  playlist?: playlist;
  banners:bannersitem[];
  songs: songsitem[];
  result: {
    hots: hostitem[]; 
    songs:songsitem[];
  }
  events?:AnyObject;
  cookie: string
}
export interface songsitem {
  id: number;
  name: string;
  album:{
    id: number;
    name: string;
  };
  artists:tracks[]
}
export interface hostitem{
  first: string;
}
export interface songsitem {
  name: string;
  id: number;
  al: aliten;
}
interface aliten {
  id: number;
  picUrl: string
}
export interface eventItem {
  data?: dataitem[];
  banners:bannersitem[];
  list?: listIten[];
  recommend?: Recommenditem[];
  playlists?: playlistsitem[];
  privileges?: any;
  playlist?: playlist;
}
  
interface dataitem {
  id: number;
  url: string;
  key: string;
  limit: number
}
export interface playlist {
  name: string;
  id: number;
  tracks: tracks[]
}
interface tracks {
  name: string;
  id: number;
}
export interface playlistsitem {
  description:string;
  coverImgUrl: string;
  id: number;
  playCount: number;
  tracks:{
    name: string;
    id: number;
  }
}
export interface Recommenditem {
  name: string;
  id: number;
  picUrl: string;
  createTime: number;
}

 export interface listIten {
  id: number;
  name: string;
  tracks: tracksItem[],
  coverImgUrl: string;
}
interface tracksItem{
  first: string;
  second: string;
}

export interface bannersitem {
  imageUrl: string;
  targetId: number;
}

interface dataitem {
  id: number;
  phone: string;
  password: number;
  keywords: string;
  captcha: string
}

export type dataIt = Partial<dataitem>