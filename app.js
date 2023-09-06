const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');



const sequelize = new Sequelize('effizients_db', 'root', 'Sheetal@2002', {
  host: 'localhost',
  dialect: 'mysql',
});


const ApplicationDetails = require('./models/applicationdetails')(sequelize); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('style')); 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post('/', (req, res) => {
    ApplicationDetails.create({
      email: req.body.email,
      fullName: req.body.fullName,
      age: req.body.age,
      education: req.body.education,
      institute: req.body.institute,
      workExperience: req.body.workExperience,
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName,
      jobDuties: req.body.jobDuties,
      admissionInstitute: req.body.admissionInstitute,
      programOfStudy: req.body.programOfStudy,
      applyingCountry: req.body.applyingCountry,
      futureGoals: req.body.futureGoals,
      listeningScore: req.body.listeningScore,
      readingScore: req.body.readingScore,
      speakingScore: req.body.speakingScore,
      writingScore: req.body.writingScore,
      firstYearTuition: req.body.firstYearTuition,
      gic: req.body.gic,
    })
      .then((record) => {
        console.log('Data stored in the database:', record.toJSON());
  
        const mailOptions = {
          from: "airlinenoti123@gmail.com",
          to: req.body.email,
          subject: "User Details",
          text: `
            Email: ${req.body.email}
            Full Name: ${req.body.fullName}
            Age: ${req.body.age}
            Education: ${req.body.education}
            Institute: ${req.body.institute}
            Work Experience: ${req.body.workExperience}
            Job Title: ${req.body.jobTitle}
            Company Name: ${req.body.companyName}
            Job Duties: ${req.body.jobDuties}
            Admission Institute: ${req.body.admissionInstitute}
            Program of Study: ${req.body.programOfStudy}
            Applying Country: ${req.body.applyingCountry}
            Future Goals: ${req.body.futureGoals}
            Listening Score: ${req.body.listeningScore}
            Reading Score: ${req.body.readingScore}
            Speaking Score: ${req.body.speakingScore}
            Writing Score: ${req.body.writingScore}
            First Year Tuition: ${req.body.firstYearTuition}
            GIC: ${req.body.gic}
          `,
        };
  
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
          }
          console.log('Email sent:', info.response);
          res.status(200).send('Data stored and email sent successfully');
        });
      })
      .catch((error) => {
        console.error('Error storing data in the database:', error);
        res.status(500).send('Error storing data in the database');
      });
  });
  
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
