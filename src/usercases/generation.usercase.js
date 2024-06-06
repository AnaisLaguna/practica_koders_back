const Generations = require('../models/generations.model');

async function createGeneration(generationData){
    const newGeneration = await Generations.create(generationData);
    return newGeneration;
};

async function getAllGenerations(){
    const allGenerations = await Generations.find();
    return allGenerations;
};

async function getByIdGeneration(id){
    const generation = await Generations.findById(id);
    return generation;
};

async function updateByIdGeneration(id, newData){
    const updateGeneration = await Generations.findByIdAndUpdate(id, newData, {new:true});
    return updateGeneration;
};

async function deleteByIdGeneration(id){
    const deleteGeneration = await Generations.findByIdAndDelete(id);
    return deleteGeneration;
};

module.exports = {
    createGeneration,
    getAllGenerations,
    getByIdGeneration,
    updateByIdGeneration,
    deleteByIdGeneration      
};