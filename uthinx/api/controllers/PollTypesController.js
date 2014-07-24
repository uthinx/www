/**
 * PollTypesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var PollTypesController = {

   create: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },
   read: function (req, res) {
    // Send a JSON response
       var id = req.param('id') || "",
           response = { "ok": false, "id": id },
           params = (id) ? { "_id": req.param('id') } : {};

       PollTypes.find(params).exec(function (err, types) {
           if (err) {
               response.err = err;
               response.desc = "Error";
               response.types = [];
               return res.json(response);
           }
           else if (!types) {
               response.err = err;
               response.desc = "Types is empty";
               response.types = [];
               return res.json(response);
               //return res.send("No other chicken with that id exists!", 404);
           }
           else {
               return res.json(types);
           }
       });
  },
   update: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },
   delete: function (req, res) {
    
    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to PollTypesController)
   */
  _config: {}

  
};

module.exports = PollTypesController;