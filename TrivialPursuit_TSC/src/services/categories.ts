import axios, { AxiosResponse } from "axios";
import Category from "../models/category";

class CategoriesService {
  http = axios.create({
    baseURL: "https://opentdb.com/api_category.php",
  });

  async getCategories() {
    const response: AxiosResponse = await this.http.get("");
    const categories: Category[] = response.data.trivia_categories;

    return categories;
  }
}
export default new CategoriesService();
