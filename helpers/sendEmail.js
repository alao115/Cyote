import nodemailer from "nodemailer"
import dotenv from 'dotenv';

dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
export default async function sendMail({ from, to, mailContent, subject }) {
    // Generate test SMTP service account from ethereal.email
    try {
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = await nodemailer.createTransport({
            host: process.env.MAIL_HOST || "smtp.ethereal.email", //testAccount
            port: process.env.MAIL_PORT || 587, //testAccount
            secure: process.env.MAIL_SECURE || false, // true for 465, false for other ports
            //service: 'gmail', for a real Gmail account
            auth: {
                user: process.env.MAIL_USERNAME || testAccount.user, // generated ethereal user
                pass: process.env.MAIL_PASSWORD || testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            html: mailContent, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (err) { throw err }
}