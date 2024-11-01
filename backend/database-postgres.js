import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

//Clientes
  async listClientes() {
    const clientes = await sql`select * from clientes`;
    return clientes;
  }

  async createClientes(cliente) {
    const id = randomUUID();
    console.log('id', id);
    const name = cliente.name;
    const descricao = cliente.descricao;

    await sql`insert into clientes (id, name, descricao)
    values (${id}, ${name}, ${descricao})`
  }

  async updateCliente(id, cliente) {
    const name = cliente.name;
    const descricao = cliente.descricao;

    await sql`update clientes set 
        name = ${name},
        descricao = ${descricao}
        where id = ${id}
    `;
  }

  async deleteCliente(id) {
    await sql`delete from clientes where id = ${id}`
  }

//Cuidadores
async listCuidadores() {
    const cuidadores = await sql`select * from cuidadores`;
    return cuidadores;
  }

  async createCuidadores(cuidador) {
    const id = randomUUID();
    console.log('id', id);
    const name = cuidador.name;
    const descricao = cuidador.descricao;

    await sql`insert into cuidadores (id, name, descricao)
    values (${id}, ${name}, ${descricao})`
  }

  async updateCuidador(id, cuidador) {
    const name = cuidador.name;
    const descricao = cuidador.descricao;

    await sql`update cuidadores set 
        name = ${name},
        descricao = ${descricao}
        where id = ${id}
    `;
  }

  async deleteCuidador(id) {
    await sql`delete from cuidadores where id = ${id}`
  }

//Admins
async listAdmins() {
    const admins = await sql`select * from admins`;
    return admins;
  }

  async createAdmins(admin) {
    const id = randomUUID();
    console.log('id', id);
    const name = admin.name;
    const descricao = admin.descricao;

    await sql`insert into admins (id, name, descricao)
    values (${id}, ${name}, ${descricao})`
  }

  async updateAdmin(id, admin) {
    const name = admin.name;
    const descricao = admin.descricao;

    await sql`update admins set 
        name = ${name},
        descricao = ${descricao}
        where id = ${id}
    `;
  }

  async deleteAdmin(id) {
    await sql`delete from admins where id = ${id}`
  }
}