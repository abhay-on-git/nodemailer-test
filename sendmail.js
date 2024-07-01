const nodemailer = require("nodemailer");

exports.sendmail = async (email,name) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PWD,
        },
    });

    const mailOptions = {
        from: "NodeMailer Test <abhayagnihotri1585@gmail.com>",
        to: email,
        subject: "Test",
        html: `
                <h3>Welcome to the NodeMailer</h3>
                <h2>${name}</h2>
            `,
    };

    transport.sendMail(mailOptions, async (err, info) => {
        console.log('first')
        if (err) return res.send(err);
        console.log(info);

        return res.redirect(`/welcome`);
    });
};