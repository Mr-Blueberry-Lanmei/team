export interface Item {
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE"
}

export interface responseItem {
  list: any[];
  playlists: any;
  forEach(arg0: (obj: any) => void): unknown;
  code: number;
  message?: string;
  data: any;
}