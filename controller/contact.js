import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // validation
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({
      message: "Message saved successfully",
      data: newContact
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};