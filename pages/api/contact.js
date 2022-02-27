import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Update your SendGrid API key here
        api_key: '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'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));
console.log(mailer);

// export default async (req, res) => {
//     console.log('123213')
//     const {name, email, number, subject, text} = req.body;

//     const data = {
//         // Update your email here
//         to: 'info@madoxproductions.com',
//         from: email,
//         subject: 'Hi there',
//         text: text,
//         html: `
//             <b>From:</b> ${name} <br /> 
//             <b>Number:</b> ${number} <br /> 
//             <b>Subject:</b> ${subject} <br /> 
//             <b>Message:</b> ${text} 
//         ` 
//     };
//     console.log(data);
//     try {
//          const response = await mailer.sendMail(data);
//         console.log(response,'123213');
//         res.status(200).send("Email send successfully")
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error proccessing charge");
//     }
// }

export default async function handler(req, res) {
    const {name, email, number, subject, text} = req.body;

    const data = {
        // Update your email here
        to: 'info@madoxproductions.com',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    console.log(data);
    try {
                 const response = await mailer.sendMail(data);
                console.log(response,'123213');
                res.status(200).send("Email send successfully")
            } catch (error) {
                console.log(error);
                res.status(500).send("Error proccessing charge");
            }
}
