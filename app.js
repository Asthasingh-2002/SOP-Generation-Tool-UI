const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
require('dotenv').config();


const app = express();

const port = process.env.PORT;
const emailUser = process.env.GMAIL_EMAIL;
const emailPassword = process.env.GMAIL_PASS;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes
app.use(express.static('style'));


// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Example: for Gmail
    auth: {
        user: emailUser,
        pass: emailPassword,
    },
});
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});

app.post('/', (req, res) => {
    // Email content
    const mailOptions = {
        from: "airlinenoti123@gmail.com",
        to: req.body.email,
        subject: "User Details",
        text: `
        Email: ${req.body.email}
        Full Name: ${req.body.fullName}
        Age: ${req.body.age}
        Highest Level of Education: ${req.body.education}
        Institute: ${req.body.institute}
        Study: ${req.body.study}
        Work Experience: ${req.body.workExperience}
        Admission Institute: ${req.body.admissionInstitute}
        Program of Study: ${req.body.programOfStudy}
        Applying Country: ${req.body.applyingCountry}
        Future Goals: ${req.body.futureGoals}
        English Scores - Listening: ${req.body.listeningScore}
        English Scores - Reading: ${req.body.readingScore}
        English Scores - Speaking: ${req.body.speakingScore}
        English Scores - Writing: ${req.body.writingScore}
        First Year Tuition: ${req.body.firstYearTuition}
        Tuition Fee: ${req.body.tuitionFee}
        GIC: ${req.body.gic}
        GIC Amount: ${req.body.gicAmount}
        `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
