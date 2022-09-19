import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get("https://booksystemmello.herokuapp.com/categories");
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(`https://booksystemmello.herokuapp.com/categories/${id}`);
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post("https://booksystemmello.herokuapp.com/categories", categoria);
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(`https://booksystemmello.herokuapp.com/categories/${id}`);
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(
      `https://booksystemmello.herokuapp.com/categories/${categoria.id}`,
      categoria
    );
    return response.data;
  }
}
