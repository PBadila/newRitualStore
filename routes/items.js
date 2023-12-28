const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Get all items
router.get("/", async (req, res) => {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving items", error });
    }
  });
  
// Get a specific item by id
router.get("/:id", async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id); 
  
      if (!item) {
        res.status(404).json({ message: "Item not found" });
      } else {
        res.json(item);
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving item", error });
    }
  });

  // Get all items for a specific ritual
router.get("/ritual/:id", async (req, res) => {
    try {
      const items = await Item.findAll({
        where: {
            ritual_id : req.params.id,
        },
        
      }); 
  
      if (!items) {
        res.status(404).json({ message: "Items not found" });
      } else {
        res.json(items);
      }
    } catch (error) {
      res.status(500).json({ message: "Error retrieving items", error });
    }
  });

  // Create a new item
router.post("/", async (req, res) => {
    const { title, imageURL, price, ritual_id, ingredients, options } = req.body;
    try {
      const item = await Item.create({ title, imageURL, price, ritual_id, ingredients, options });
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ message: "Error creating item", error });
    }
  });

  // Delete an item by ID
router.delete("/:id", async (req, res) => {
    try {
      const deleted = await Item.destroy({
        where: { id: req.params.id },
      });
  
      if (deleted) {
        res.status(204).json({ message: "Item deleted" });
      } else {
        res.status(404).json({ message: "Item not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting Item", error });
    }
  });

  // Update an item by ID
router.put("/:id", async (req, res) => {
    const { title, imageURL, price, ritual_id, ingredients, options } = req.body;
  
    try {
      const newItem = {};
      if (title !== undefined) {
        newItem.title = title;
      }
      if (imageURL !== undefined) {
        newItem.imageURL = imageURL;
      }
      if (price !== undefined) {
        newItem.price = price;
      }
      if (ritual_id !== undefined) {
        newItem.ritual_id = ritual_id;
      }
      if (ingredients !== undefined) {
        newItem.ingredients = ingredients;
      }
      if (options !== undefined) {
        newItem.options = options;
      }
      const [updated] = await Item.update(newItem, {
        where: { id: req.params.id },
      });
  
      if (updated) {
        const updatedItem = await Item.findByPk(req.params.id);
        res.json(updatedItem);
      } else {
        res.status(404).json({ message: "Item not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating item", error });
    }
  });
module.exports = router;