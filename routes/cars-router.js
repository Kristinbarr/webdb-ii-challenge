const express = require('express')
const router = express()
const carModel = require('../data/cars-model')

router.get('/', async (req, res) => {
  try {
    const cars = await carModel.get()
    if (!cars.length) res.status(404).json({ error: 'Error retrieving cars' })
    else res.status(200).json(cars)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving cars' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const car = await carModel.get(req.params.id)
    if (JSON.stringify(car) === '{}')
      res.status(404).json({ error: 'Error retrieving car' })
    else res.status(200).json(car)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving car' })
  }
})

router.post('/', async (req, res) => {
  try {
    const car = await carModel.insert(req.body)
    if (JSON.stringify(car) === '{}')
      res.status(404).json({ error: 'Error with submitted car' })
    else res.status(200).json(car)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error adding car' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const carBefore = await carModel.get(req.params.id)
    const count = await carModel.update(req.params.id, req.body)
    if (!count) res.status(404).json({ error: 'Error with submitted car' })
    res.status(200).json({
      message: 'Update successful',
      before: carBefore,
      after: req.body
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error updating car' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await carModel.remove(req.params.id)
    if (!count) res.status(404).json({ message: `Error with submitted car id` })
    res.status(200).json({ message: `deleted car with id: ${req.params.id}` })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error deleting car' })
  }
})

module.exports = router
