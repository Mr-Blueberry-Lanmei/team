export interface Item {
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE"
}

export interface responseItem {
  code: number;
  message?: string;
  data?: any;
  banners:bannersitem[]
}

export interface bannersitem {
  imageUrl: string;
  targetId: number;
}