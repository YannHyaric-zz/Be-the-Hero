
const request = require("supertest");
const app = require("../../src/app");
const conect = require("../../src/DB/conect");

describe("ONG", () => {
  beforeEach(async() => {
    await conect.migrate.rollback();
    await conect.migrate.latest();
  });

  afterAll(async()=>{
      await conect.destroy();
  })
  
  it("shold be able to create a new ONG", async () => {
    const response = request(app).post("/ongs").send({
      name: "SJPA",
      email: "contato@email.com",
      whatsapp: "900000000",
      endereco: "rua tal",
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
