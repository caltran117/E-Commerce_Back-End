const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all categories
  Tag.findAll({
  })
  .then(tag=>res.json(tag))
  .catch(err=>res.json(err))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one Tag by its `id` value
  Tag.findOne({
    where:{
      id:req.params.id
    },
  })
  .then(tag=>res.json(tag))
  .catch(err=>res.json(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new Tag
  Tag.create(req.body)
  .then(tag=>res.json(tag))
  .catch(err=>res.json(err))
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where:{
      id:req.params.id
    },
  })
  .then(tag=>res.json(tag))
  .catch(err=>res.json(err))
  });
  // update a Tag by its `id` value

router.delete('/:id', (req, res) => {
  // delete a Tag by its `id` value
  Tag.destroy({
    where:{
      id:req.params.id
    },
  })
  .then(tag=>res.json(tag))
  .catch(err=>res.json(err))
});
module.exports = router;
