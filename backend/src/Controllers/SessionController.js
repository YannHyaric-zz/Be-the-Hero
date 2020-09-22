const conect = require("../DB/conect");
const { create } = require("./OngController");
module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ong = await conect("ongs").where("id", id).select("nome").first();

    if (!ong) {
      return response.status(400).json("Nenhuma ONG com esse ID");
    }
    return response.json({ ong });
  },
};
