export default function handler(req, res) {
    setTimeout(() => {
      res.status(200).send("Hello from GitHub to Vercel!");
    }, 1000);
  }
