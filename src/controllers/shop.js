// src/controllers/shop.js
const { Router } = require('express');
const shopService = require('../services/shop');

class ShopController {
	shopService;
  async init() {
    this.shopService = await shopService();

    const router = Router();
    router.get('/', this.getAll);
    router.get('/:shopId', this.getOne);
    router.put('/:shopId', this.put);
    router.delete('/:shopId', this.delete);
    return router;
  }

   async getAll(req, res) {
	const { pageIndex, pageSize } = req.query;
	console.log(this.shopService)
    const shopList = await this.shopService.find({ pageIndex, pageSize });

    res.send({ success: true, data: shopList });
  };

  async getOne(req, res) {
    const { shopId } = req.params;
    const shopList = await this.shopService.find({ id: shopId });

    if (shopList.length) {
      res.send({ success: true, data: shopList[0] });
    } else {
      res.status(404).send({ success: false, data: null });
    }
  };

  async put(req, res) {
    const { shopId } = req.params;
    const { name } = req.query;
    const shopInfo = await this.shopService.modify({
      id: shopId,
      values: { name },
    });

    if (shopInfo) {
      res.send({ success: true, data: shopInfo });
    } else {
      res.status(404).send({ success: false, data: null });
    }
  };

  async delete(req, res) {
    const { shopId } = req.params;
    const success = await this.shopService.remove({ id: shopId });

    if (!success) {
      res.status(404);
    }
    res.send({ success });
  };
}

module.exports = async () => {
  const c = new ShopController();
  return await c.init();
};