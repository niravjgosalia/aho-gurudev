import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "lotus.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    let data = { count: 100 };

    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    // Increase lotus count
    data.count += 1;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ success: true, count: data.count, message: "Lotus offered successfully 🌸" });
  }

  if (req.method === "GET") {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return res.status(200).json(data);
    }
    return res.status(200).json({ count: 100 });
  }

  res.status(405).json({ message: "Method not allowed" });
}
