
const mentor = require('../models/mentor.model');

async function create(mentorData) {
    const newMentor = await mentor.create(mentorData);
    return newMentor;
}

async function getAll() {
    const allMentor = await mentor.find();
    return allMentor;
}

async function getById(id) {
    const mentor = await mentor.findById(id);
    return mentor;
}

async function deleteById(id) {
    const mentorDeleted = await mentor.findByIdAndDelete(id);
    return mentorDeleted;
}

async function updateById(id, newMentorData) {
    const updatementor = await mentor.findByIdAndUpdate(id, newMentorData, {
         new: true, 
    });
    return updatementor;
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};