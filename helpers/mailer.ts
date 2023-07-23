import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
interface EmailPasrams{
    to: string,
    subject: string,
    html:string
}
  const sendEmail = async ({to, subject, html }: EmailPasrams)=>{
    try {
        const result = await transporter.sendMail({
            from:`NegocioOnline <nelsonfercher@gmail.com>`,//este sería el email del cliente
            to,
            subject,
            html
        })
        console.log({result})
        return {ok: true, message:"Excelete mail enviado con exito!"}
    } catch (error) {
        console.log({error})
       return{
        ok: false,
        message:"Hubo un error al enviar el email",
        err: error,
       }
    }
  }

  export default sendEmail;

