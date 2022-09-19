import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://booksystemmello.herokuapp.com/authors");
    return response.data;
  }

  async buscarAutores(id) {
    const response = await axios.get(`https://booksystemmello.herokuapp.com/authors/${id}`);
    return response.data;
  }

  async adicionarAutores(autores) {
    const response = await axios.post("https://booksystemmello.herokuapp.com/authors", autores);
    return response.data;
  }

  async excluirAutores(id) {
    const response = await axios.delete(`https://booksystemmello.herokuapp.com/authors/${id}`);
    return response.data;
  }

  async atualizarAutores(autores) {
    const response = await axios.put(
      `https://booksystemmello.herokuapp.com/authors/${autores.id}`,
      autores
    );
    return response.data;
  }
}
