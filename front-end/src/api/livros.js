import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://booksystemmello.herokuapp.com/books");
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(`https://booksystemmello.herokuapp.com/books/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("https://booksystemmello.herokuapp.com/books", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://booksystemmello.herokuapp.com/books/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://booksystemmello.herokuapp.com/books/${livro.id}`,
      livro
    );
    return response.data;
  }
}