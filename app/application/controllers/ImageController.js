"use strict";

module.exports = function(args) {
  var ImageWorker = args.workers.ImageWorker;

  var ImageController = {
    createData: function(previousData, req, res, next) {
      ImageWorker.newData(req.body, function(err, success) {
        if (err) {
          next(err);
        } else {
          next(null, success);
        }
      });
    }
  };

  return ImageController;
};
