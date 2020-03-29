const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');



describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
       await connection.destroy();
    });

    

    // Se quiseres mandar headers usas .set
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "asd", 
            email: "asd@asd.com", 
            whatsapp: "123456789", 
            city: "asdas", 
            uf: "ds"
        });

        
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

});
