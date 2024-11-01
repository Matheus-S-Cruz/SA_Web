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
server.post('/cuidadores', async (request, reply) => {
    const body = request.body;
    let error = {};

    if (!body.name) {
        error.name = 'O Name não foi Informado'
    } 
    
    if (!body.descricao) {
        error.descricao = 'A Descricao não foi Informada'
    } 

    if(body.name && body.descricao) {
        await databasePostgres.createCuidador(body);
        return reply.status(201).send();
    } else {
        return reply.status(400).send(error);
    }

    // await databasePostgres.createCuidador(body);
    // return reply.status(201).send();
})

// READ
server.get('/cuidadores', async () => {
    const cuidadores = await databasePostgres.listCuidadores();
    return cuidadores;
});

// UPDATE
server.put('/cuidadores/:id', async (request, reply) => {
    const cuidadorID = request.params.id;
    const body = request.body;
    let error = {};

    // Validação do ID
    if (!cuidadorID) {
        error.id = 'O ID do cuidador não foi informado';
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

    // Se todos os dados forem válidos, atualiza o cuidador
    try {
        const updatedCuidador = await databasePostgres.updateCuidador(cuidadorID, body);
        
        if (updatedCuidador) {
            return reply.status(204).send('Alterado com sucesso');
        } else {
            return reply.status(404).send({ error: 'Cuidador não encontrado' });
        }
    } catch (err) {
        return reply.status(500).send({ error: 'Erro ao atualizar o cuidador' });
    }
});

// DELETE
server.delete('/cuidadores/:id', async (request, reply) => {
    const cuidadorID = request.params.id;
    await databasePostgres.deleteCuidador(cuidadorID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
