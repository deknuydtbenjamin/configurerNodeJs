import "dotenv/config";
import cowsay from "cowsay";

const name = process.env.MYNAME;
const campus = process.env.MYCAMPUS;

const message = `Bonjour, je m'appelle ${name} et je viens de ${campus}!`;

console.log(cowsay.say({ text: message }));
