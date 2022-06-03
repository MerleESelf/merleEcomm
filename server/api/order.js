const router = require("express").Router();
const {
  models: { Plant, Order, CartDetail },
} = require("../db/models");

//GET /api/order/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const order = await Order.findAll({
      where: {
        userId: req.params.userId,
        isComplete: false,
      },
    });
    const currentOrderId = JSON.stringify(order[0].id);
    const openOrder = await Order.findByPk(currentOrderId);
    const cartPlants = await CartDetail.findAll({
      where: {
        orderId: currentOrderId,
      },
      include: Plant,
    });
    res.send({
      openOrder,
      cartPlants,
    });
  } catch (error) {
    next(error);
  }
});

//GET /api/order/:userId/:plantId
  router.get("/:userId/:plantId", async (req, res, next) => {
    try {
      const order = await Order.findAll({
          where: {
              userId: req.params.userId,
              isComplete: false
            }});
      const currentOrderId = JSON.stringify(order[0].id)
      const [cartDetailPlant, created] = await CartDetail.findOrCreate({
          where: {
              orderId: currentOrderId,
              plantId: req.params.plantId
          }, 
      })
        const oldNum = cartDetailPoster.quantity
        await cartDetailPlant.update({ quantity: oldNum +1 })
      await cartDetailPlant.save()
      res.send({
      cartDetailPlant, //cartdetail row, obj
      order}// order row, arr
    )
    } catch (error) {
      next(error);
    }
  });

//GET /api/order/:userId/:orderId
router.get("/:userId/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(order);
  } catch (error) {
    next(error);
  }
});

//PUT /api/order/:userId/:orderId
router.put("/:userId/:orderId", async (req, res, next) => {
  try {
    const completeOrder = await Order.update(
      { isComplete: true },
      { where: { id: req.params.orderId } }
    );
    res.send(completeOrder);
  } catch (error) {
    next(error);
  }
});

// PUT api/order/:orderId/:plantId
router.put("/:userId/:orderId/:plantId", async (req, res, next) => {
  try {
    const plantToEdit = await CartDetail.findOne({
      where: { orderId: req.params.orderId, plantId: req.params.plantId },
    });

    await plantToEdit.update({quantity: req.body.quantity});
    await plantToEdit.save()
    const order = await Order.findAll({
      where: {
        userId: req.params.userId,
        isComplete: false,
      },
    });
    
    const currentOrderId = JSON.stringify(order[0].id);
    const openOrder = await Order.findByPk(currentOrderId);
    const cartPlants = await CartDetail.findAll({
      where: {
        orderId: currentOrderId,
      },
      include: Plant,
    });
    res.send({
      openOrder,
      cartPlants,
    });
  } catch (error) {
    next(error);
  }
});

//delete api/order/:orderId/:plantId
router.delete('/:userId/:orderId/:plantId', async (req, res, next) => {
	try {
		const plant = await CartDetail.findOne({
			where: { orderId: req.params.orderId, plantId: req.params.plantId },
		});
		plant.destroy();
  
    const order = await Order.findAll({
      where: {
          userId: req.params.userId,
          isComplete: false
        }});
  const currentOrderId = JSON.stringify(order[0].id)
  const openOrder = await Order.findByPk(currentOrderId)
  const cartPlants = await CartDetail.findAll({
      where: {
          orderId: currentOrderId
      }, 
      include: Plant,
  })
  res.send({
    openOrder,
    cartPlants
})

	} catch (error) {
		next(error);
	}

});

module.exports = router;