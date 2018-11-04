import { baseUrl } from "src/config";

export default class BaseApi {
  baseUrl: string = `${baseUrl}/api`;

  async call(route: string, method: "post" | "get" | "put" | "delete", data?: any) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${this.baseUrl}${route}`);

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }

    return await new Promise<any>((resolve, reject) => {
      xhr.addEventListener("load", () => {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (err) {
          resolve(xhr.responseText);
        }
      });
      xhr.addEventListener("error", () => reject(xhr.responseText));
    });
  }
}