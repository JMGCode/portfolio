import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../nodemailer";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.email || !data.details)
      return res.status(404).json({ message: "Bad request" });

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "PORTFOLIO EMAIL",
        text: "",
        html: `<div>
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.details}</p> 
        </div>`,
      });
      return res.status(200).json({ message: "Sended" });
    } catch (e: any) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
