const db = require('../db');

module.exports = {
    getByUserId : async (user_id) => {
        return await db('recipes').where('user_id', user_id);
    },
    createRecipe : async (user_id, title, description) => {
        const recipe = await db('recipes').insert({user_id, title, description}).returning('*');
        return recipe[0];
    },
    getById : async(recipe_id) => {
        return await db('recipes').where('id', id);
    },
    searchByName : async(name) => {
        return knex('recipes').whereRaw
    },
    searchByTags : async (list_tags) => {
        knex.raw(`
        SELECT recipe_id FROM recipe_tags WHERE 
        `)
    },
}