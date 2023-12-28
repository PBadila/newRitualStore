const express = require("express");
const router = express.Router();
const { Ritual } = require("../models");

// Get all rituals
router.get("/", async (req, res) => {
    try {
      const rituals = await Ritual.findAll();
      res.json(rituals);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving rituals", error });
    }
  });
  
// Get a specific ritual by id
router.get("/:id", async (req, res) => {
    try {
      const ritual = await Ritual.findByPk(req.params.id); 
  
      if (!ritual) {
        res.status(404).json({ message: "Ritual not found" });
      } else {
        res.json(ritual);
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving ritual", error });
    }
  });


  // Create a new ritual
router.post("/", async (req, res) => {
    const { title, imageURL, price, components, history, suggRitual, benefits, link1, link2, link3 } = req.body;
    try {
      const ritual = await Ritual.create({ title, imageURL, price, components, history, suggRitual, benefits, link1, link2, link3 });
      res.status(201).json(ritual);
    } catch (error) {
      res.status(500).json({ message: "Error creating ritual", error });
    }
  });

  // Delete a ritual by ID
router.delete("/:id", async (req, res) => {
    try {
      const deleted = await Ritual.destroy({
        where: { id: req.params.id },
      });
  
      if (deleted) {
        res.status(204).json({ message: "Ritual deleted" });
      } else {
        res.status(404).json({ message: "Ritual not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting Ritual", error });
    }
  });

  // Update a ritual by ID
router.put("/:id", async (req, res) => {
    const { title, imageURL, price, components, history, suggRitual, benefits, link1, link2, link3 } = req.body;
  
    try {
      const newRitual = {};
      if (title !== undefined) {
        newRitual.title = title;
      }
      if (imageURL !== undefined) {
        newRitual.imageURL = imageURL;
      }
      if (price !== undefined) {
        newRitual.price = price;
      }
      if (components !== undefined) {
        newRitual.components = components;
      }
      if (history !== undefined) {
        newRitual.history = history;
      }
      if (suggRitual !== undefined) {
        newRitual.suggRitual = suggRitual;
      }
      if (benefits !== undefined) {
        newRitual.benefits = benefits;
      }
      if (link1 !== undefined) {
        newRitual.link1 = link1;
      }
      if (link2 !== undefined) {
        newRitual.link2 = link2;
      }
      if (link3 !== undefined) {
        newRitual.link3 = link3;
      }
      const [updated] = await Item.update(newRitual, {
        where: { id: req.params.id },
      });
  
      if (updated) {
        const updatedRitual = await Ritual.findByPk(req.params.id);
        res.json(updatedRitual);
      } else {
        res.status(404).json({ message: "Ritual not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating ritual", error });
    }
  });
module.exports = router;