'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ApplicationDetails extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  ApplicationDetails.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    institute: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workExperience: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobDuties: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admissionInstitute: {
      type: DataTypes.STRING,
      allowNull: false
    },
    programOfStudy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applyingCountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    futureGoals: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listeningScore: {
      type: DataTypes.STRING,
      allowNull: false
    },
    readingScore: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speakingScore: {
      type: DataTypes.STRING,
      allowNull: false
    },
    writingScore: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstYearTuition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gic: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ApplicationDetails',
  });

  return ApplicationDetails;
};
