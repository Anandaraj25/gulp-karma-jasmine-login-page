// helpers/nodemailerSetup.js
const nodemailer = require("nodemailer");

// Function to send an email with test case results
function sendEmail() {
    // Create a nodemailer transporter using Outlook service
    const sender = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'your_email@example.com',
            pass: 'your_email_password'
        }
    });

    // Compose the email content
    const mail = {
        from: 'your_email@example.com',
        to: 'recipient_email@example.com',
        subject: 'Sending Email using Node.js',
        text: 'Test case results in HTML format.',
        attachments: [
            {
                filename: 'report.html',
                path: __dirname + '../../report.html'
            }
        ]
    };
    
    // Send the email
    sender.sendMail(mail, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully.");
        }
    });
}

// Export the function to make it accessible from other files
module.exports = { sendEmail };
