'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const now = new Date();

        // Insert tasks
        await queryInterface.bulkInsert('tasks', [
            {
                id: 1,
                instruction: 'What is the capital of France?',
                created_at: now,
                updated_at: now,
            },
            {
                id: 2,
                instruction: 'Which planet is known as the Red Planet?',
                created_at: now,
                updated_at: now,
            },
            {
                id: 3,
                instruction: 'What is the largest ocean on Earth?',
                created_at: now,
                updated_at: now,
            },
            {
                id: 4,
                instruction: 'Who painted the Mona Lisa?',
                created_at: now,
                updated_at: now,
            },
            {
                id: 5,
                instruction: 'What is the smallest prime number?',
                created_at: now,
                updated_at: now,
            },
            {
                id: 6,
                instruction: 'Which programming language is known for its use in web development and has a name related to coffee?',
                created_at: now,
                updated_at: now,
            },
        ], {});

        // Insert task options
        await queryInterface.bulkInsert('task_options', [
            // Task 1 options
            { task_id: 1, text: 'London', is_correct: false, created_at: now, updated_at: now },
            { task_id: 1, text: 'Paris', is_correct: true, created_at: now, updated_at: now },
            { task_id: 1, text: 'Berlin', is_correct: false, created_at: now, updated_at: now },
            { task_id: 1, text: 'Madrid', is_correct: false, created_at: now, updated_at: now },

            // Task 2 options
            { task_id: 2, text: 'Venus', is_correct: false, created_at: now, updated_at: now },
            { task_id: 2, text: 'Mars', is_correct: true, created_at: now, updated_at: now },
            { task_id: 2, text: 'Jupiter', is_correct: false, created_at: now, updated_at: now },
            { task_id: 2, text: 'Saturn', is_correct: false, created_at: now, updated_at: now },

            // Task 3 options
            { task_id: 3, text: 'Atlantic Ocean', is_correct: false, created_at: now, updated_at: now },
            { task_id: 3, text: 'Indian Ocean', is_correct: false, created_at: now, updated_at: now },
            { task_id: 3, text: 'Pacific Ocean', is_correct: true, created_at: now, updated_at: now },
            { task_id: 3, text: 'Arctic Ocean', is_correct: false, created_at: now, updated_at: now },

            // Task 4 options
            { task_id: 4, text: 'Vincent van Gogh', is_correct: false, created_at: now, updated_at: now },
            { task_id: 4, text: 'Leonardo da Vinci', is_correct: true, created_at: now, updated_at: now },
            { task_id: 4, text: 'Pablo Picasso', is_correct: false, created_at: now, updated_at: now },
            { task_id: 4, text: 'Michelangelo', is_correct: false, created_at: now, updated_at: now },

            // Task 5 options
            { task_id: 5, text: '0', is_correct: false, created_at: now, updated_at: now },
            { task_id: 5, text: '1', is_correct: false, created_at: now, updated_at: now },
            { task_id: 5, text: '2', is_correct: true, created_at: now, updated_at: now },
            { task_id: 5, text: '3', is_correct: false, created_at: now, updated_at: now },

            // Task 6 options
            { task_id: 6, text: 'Python', is_correct: false, created_at: now, updated_at: now },
            { task_id: 6, text: 'JavaScript', is_correct: true, created_at: now, updated_at: now },
            { task_id: 6, text: 'Ruby', is_correct: false, created_at: now, updated_at: now },
            { task_id: 6, text: 'C++', is_correct: false, created_at: now, updated_at: now },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        // Remove task options first (foreign key constraint)
        await queryInterface.bulkDelete('task_options', null, {});

        // Remove tasks
        await queryInterface.bulkDelete('tasks', null, {});
    }
};
