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
server.post('/admins', async (request, reply) => {
    const body = request.body;
    let error = {};

    if (!body.name) {
        error.name = 'O Name não foi Informado'
    } 
    
    if (!body.descricao) {
        error.descricao = 'A Descricao não foi Informada'
    } 

    if(body.name && body.descricao) {
        await databasePostgres.createAdmin(body);
        return reply.status(201).send();
    } else {
        return reply.status(400).send(error);
    }

    // await databasePostgres.createAdmin(body);
    // return reply.status(201).send();
})

// READ
server.get('/admins', async () => {
    const admins = await databasePostgres.listAdmins();
    return admins;
});

// UPDATE
server.put('/admins/:id', async (request, reply) => {
    const adminID = request.params.id;
    const body = request.body;
    let error = {};

    // Validação do ID
    if (!adminID) {
        error.id = 'O ID do admin não foi informado';
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

    // Se todos os dados forem válidos, atualiza o admin
    try {
        const updatedAdmin = await databasePostgres.updateAdmin(adminID, body);
        
        if (updatedAdmin) {
            return reply.status(204).send('Alterado com sucesso');
        } else {
            return reply.status(404).send({ error: 'Admin não encontrado' });
        }
    } catch (err) {
        return reply.status(500).send({ error: 'Erro ao atualizar o admin' });
    }
});

// DELETE
server.delete('/admins/:id', async (request, reply) => {
    const adminID = request.params.id;
    await databasePostgres.deleteProduto(adminID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
