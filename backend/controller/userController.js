const User = require('../model/userModel')

const createHandler = async function (req, res) {
  const { ...payload } = req.body
  const doc = new User({ ...payload })
  await doc.save()

  res.status(200).json({ _id: doc._id, ...payload })
}

const getHandler = async function (req, res) {
  const { id } = req.params
  const doc = await User.findById(id)

  res.status(200).json(doc)
}

const getAllHandler = async function (req, res) {
  const doc = await User.find().sort({ updatedAt: -1 })

  res.status(200).json({ doc })
}

const updateHandler = async function (req, res) {
  const { id } = req.params
  console.log(id)
  const { ...payload } = req.body
  await User.findOneAndUpdate({ _id: id }, { $set: { ...payload } })

  res.status(200).json(req.body)
}

const deleteDocHandler = async function (req, res) {
  const { id } = req.params
  await User.deleteOne({ _id: id })

  res.status(200).send({ message: `Deleted ${id}` })
}

module.exports = {createHandler, getHandler, getAllHandler, updateHandler, deleteDocHandler}
  