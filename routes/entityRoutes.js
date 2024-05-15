const express = require('express');
const router = express.Router();
const db = require('../modals');

// Create new entity
router.post('/', async (req, res) => {
  try {
    const { name, email, mobileNumber, dob } = req.body;
    
    await db.Entity.create({ name, email , mobileNumber,dob});

    res.status(201).json({ message: 'Entity created successfully' });
  } catch (error) {
    console.error('Error creating entity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Get all entities
router.get('/', async (req, res) => {
  try {
    const entities = await db.Entity.findAll({ include: db.Attribute });
    res.status(200).json(entities);
  } catch (error) {
    console.error('Error fetching entities:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET by id
router.get('/:id', async (req, res) => {
  const entityId = req.params.id;

  try {
    const entity = await db.Entity.findByPk(entityId, { include: db.Attribute });

    if (!entity) {
      return res.status(404).json({ message: 'Entity not found' });
    }

    res.status(200).json(entity);
  } catch (error) {
    console.error(`Error fetching entity with ID ${entityId}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an existing entity by ID
router.put('/:id', async (req, res) => {
  const entityId = req.params.id;
  const { name, email, mobileNumber, dob } = req.body;

  try {
    const entity = await db.Entity.findByPk(entityId);

    if (!entity) {
      return res.status(404).json({ message: 'Entity not found' });
    }

    // Update entity attributes
    entity.name = name;
    entity.email = email;
    entity.mobileNumber = mobileNumber;
    entity.dob = dob;

    // Save the updated entity
    await entity.save();

    res.status(200).json({ message: 'Entity updated successfully', entity });
  } catch (error) {
    console.error('Error updating entity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Delete an existing entity by ID
router.delete('/:id', async (req, res) => {
  const entityId = req.params.id;

  try {
    const entity = await db.Entity.findByPk(entityId);

    if (!entity) {
      return res.status(404).json({ message: 'Entity not found' });
    }

    // Delete the entity
    await entity.destroy();

    res.status(200).json({ message: 'Entity deleted successfully' });
  } catch (error) {
    console.error('Error deleting entity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
