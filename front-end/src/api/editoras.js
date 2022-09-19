import axios from "axios";
export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://booksystemmello.herokuapp.com/editors");
    return response.data;
  }

  async buscarEditora(id) {
    const response = await axios.get(`https://booksystemmello.herokuapp.com/editors/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post("https://booksystemmello.herokuapp.com/editors", editora);
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`https://booksystemmello.herokuapp.com/editors/${id}`);
    return response.data;
  }

  async atualizarEditora(editora) {
    const response = await axios.put(
      `https://booksystemmello.herokuapp.com/editors/${editora.id}`,
      editora
    );
    return response.data;
  }
}
