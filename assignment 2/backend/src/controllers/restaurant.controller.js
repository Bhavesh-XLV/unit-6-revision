const express = require("express");
const Restaurant = require("../models/restaurant.model");

exports.getAllRestaurant = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 20;
    let restaurant = await Restaurant.find()
      .limit(size)
      .skip((page - 1) * size)
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await Restaurant.find().countDocuments()) / size
    );

    return res.status(201).send({ restaurant, totalPages });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.addRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    return res.status(201).send(restaurant);
  } catch (error) {
    return res.status(500).send(error);
  }
};
