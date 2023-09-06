'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ApplicationDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      education: {
        type: Sequelize.STRING,
        allowNull:false
      },
      institute: {
        type: Sequelize.STRING,
        allowNull:false
      },
      workExperience: {
        type: Sequelize.STRING,
        allowNull:false
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull:false
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      jobDuties: {
        type: Sequelize.STRING,
        allowNull:false
      },
      admissionInstitute: {
        type: Sequelize.STRING,
        allowNull:false
      },
      programOfStudy: {
        type: Sequelize.STRING,
        allowNull:false
      },
      applyingCountry: {
        type: Sequelize.STRING,
        allowNull:false
      },
      futureGoals: {
        type: Sequelize.STRING,
        allowNull:false
      },
      listeningScore: {
        type: Sequelize.STRING,
        allowNull:false
      },
      readingScore: {
        type: Sequelize.STRING,
        allowNull:false
      },
      speakingScore: {
        type: Sequelize.STRING,
        allowNull:false
      },
      writingScore: {
        type: Sequelize.STRING,
        allowNull:false
      },
      firstYearTuition: {
        type: Sequelize.STRING,
        allowNull:false
      },
      gic: {
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ApplicationDetails');
  }
};