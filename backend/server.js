import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/clientes', async (request, reply) => {
    const body = request.body;
    let error = {};

    if (!body.name) {
        error.name = 'O Name não foi Informado'
    } 
    
    if (!body.descricao) {
        error.descricao = 'A Descricao não foi Informada'
    } 

    if(body.name && body.descricao) {
        await databasePostgres.createCliente(body);
        return reply.status(201).send();
    } else {
        return reply.status(400).send(error);
    }

    // await databasePostgres.createCliente(body);
    // return reply.status(201).send();
})

// READ
server.get('/clientes', async () => {
    const clientes = await databasePostgres.listClientes();
    return clientes;
});

// UPDATE
server.put('/clientes/:id', async (request, reply) => {
    const clienteID = request.params.id;
    const body = request.body;
    let error = {};

    // Validação do ID
    if (!clienteID) {
        error.id = 'O ID do cliente não foi informado';
    }

    // Validação dos campos
    if (!body.name) {
        error.name = 'O Name não foi Informado';
    }
    
    if (!body.descricao) {
        error.descricao = 'A Descricao não foi Informada';
    }

    // Se houver erros, retornar 400 com as mensagens
    if (Object.keys(error).length > 0) {
        return reply.status(400).send(error);   
    }

    // Se todos os dados forem válidos, atualiza o cliente
    try {
        const updatedCliente = await databasePostgres.updateCliente(clienteID, body);
        
        if (updatedCliente) {
            return reply.status(204).send('Alterado com sucesso');
        } else {
            return reply.status(404).send({ error: 'Cliente não encontrado' });
        }
    } catch (err) {
        return reply.status(500).send({ error: 'Erro ao atualizar o cliente' });
    }
});

// DELETE
server.delete('/clientes/:id', async (request, reply) => {
    const clienteID = request.params.id;
    await databasePostgres.deleteProduto(clienteID);

    return reply.status(204).send();
})

server.listen({
    port: 3000
});
