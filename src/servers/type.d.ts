export interface Item {
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE"
}

export interface responseItem {
  code: number;
  message?: string;
  data:AnyObject;
}
export interface eventItem {
  code: number;
  message?: string;
  events:AnyObject;
}