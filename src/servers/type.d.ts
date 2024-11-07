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
  phone: number;
  password: number;
}

export type dataIt = Partial<dataitem>