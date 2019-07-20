"use strict";

// THIS IS TEMPLATE

module.exports = function(args) {
  var ImageModel = args.models.ImageModel;
  var logger = args.LOGGER;

  var ImageWorker = {
    newData: function(attributes, cb) {
      ImageModel.create(attributes).then(
        function(result) {
          cb(null, result);
        },
        function(reason) {
          logger.error(reason.message);
          cb({ code: 500, message: reason.message });
        }
      );
    }
  };

  return ImageWorker;
};
