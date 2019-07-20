"use strict";

module.exports = [
  //API Save Image
  {
    method: "post", //success
    endpoint: "image/save",
    controllers: ["ImageController.createData"]
  }
];
