export const createContact = async (req, res) => {
  try {
    console.log("👉 CONTACT API HIT");

    const { name, email, phone, message } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    console.log("📦 Saved in DB:", newContact._id);

    try {
      console.log("👉 Calling mail function...");
      await sendContactMail(newContact);
    } catch (err) {
      console.log("❌ MAIL ERROR (controller):", err);
    }

    res.status(201).json({
      message: "Message saved successfully",
      data: newContact,
    });

  } catch (error) {
    console.log("❌ SERVER ERROR:", error);
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