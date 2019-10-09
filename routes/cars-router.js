const express = require('express')
const router = express()
const carsModel = require('../data/carsModel')
const withCatch = require('../utils')

router.get('/', async (req, res) => {
  const [err, cars] = await withCatch(carsModel.get())
  if (err) res.status(500).json({ error: err })
  else if (!cars.length) res.status(404).json({ error: 'No cars found.' })
  else res.status(200).json(cars)
})

router.get('/:id', async (req, res) => {
  const [err, car] = await withCatch(carsModel.get(req.params.id))
  if (err) res.status(500).json({ error: err })
  else if (!cars.length) res.status(404).json({ error: 'No cars found.' })
  else res.status(200).json(car)
})

router.post('/', async (req, res) => {
  const [err, car] = await withCatch(carsModel.insert(req.body))

  if (err) res.status(500).json({ error: err })
  else if (!car.length) res.status(404).json({ error: 'problem adding car' })
  else res.status(200).json(car)
})

router.put('/:id', async (req, res) => {
  const [err, count] = await withCatch(
    CarsModel.update(req.params.id, req.body)
  )
  const [err2, beforeUpdate] = await withCatch(carsModel.get(req.params.id))
  if (err || err2) res.status(500).json({ error: err })
  else if (!count)
    res.status(500).json({
      error:
        'There was a problem updating the car with the id of ' + req.params.id
    })
  else
    res.status(200).json({
      success: 'Successfully updatd the car with the id of ' + id,
      before: beforeUpdate,
      after: req.body
    })
})

router.delete('/:id', async (req, res) => {
  const [err, count] = await withCatch(carsModel.remove(req.params.id))

  if (err) res.status(500).json({ error: err })
  else
    res.status(500).json({
      deleted: `${count} cars from system with the id of ${req.params.id}`
    })
})

module.exports = router
