const mongoose = require('mongoose');
const password = '576f87f95e0807fc3b3c756807d800f0:24c5f7c1cfe3cefb782fa5f9c099e28e3463bf6a2140a41caf09d2138acac99c90c4fb82467ecd605f564ceadf01863f4bcd528c3b77d8a7926bd0cba8f751c002e43323fda7a0a8af41dde3418bd94f';

module.exports = {
    users: [{
        _id: mongoose.Types.ObjectId('5f083c352a7908662c334532'),
        email: 'user@mailinator.com',
        employeeId: 1,
        role: 1,
        isActive: 1,
        opt: 123456,
        firstName: 'user',
        lastName: 'last',
        password
    },
    {
        _id: mongoose.Types.ObjectId('5f083c352a7908662c334535'),
        email: 'inactive@mailinator.com',
        employeeId: 2,
        role: 1,
        isActive: 0,
        opt: 123456,
        password
    },
    {
        _id: mongoose.Types.ObjectId('5f5f2cd2f1472c3303b6b861'),
        email: 'super@mailinator.com',
        employeeId: 3,
        role: 4,
        isActive: 1,
        firstName: 'Test',
        lastName: 'Admin',
        password
    }]
};
