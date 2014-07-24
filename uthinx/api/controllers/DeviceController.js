/**
 * DeviceController
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



var DeviceController = {
    create: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id },
            params = { "_id": id };

        Device.create(setDeviceFields( undefined ,req )).done(function (err, device) {
            // Error handling
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
            } else {
                response.device = device;
                return res.json(response);
            }
        });

    },
    read: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id, "desc" : "Not Avaliable" };

        return res.json(response);
    },
    update: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id, "desc" : "Not Avaliable" };

        return res.json(response);

    },
    destroy: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id, "desc" : "Not Avaliable" };

        return res.json(response);
    }
};

function setDeviceFields(device, req) {
    var d = device || {};

    d.device_entity_id = (req.param('entity_id')) ? req.param('entity_id') : 0;
    d.device_name = req.param('device_name');
    d.device_cordova = req.param('device_cordova');
    d.device_platform = req.param('device_platform');
    d.device_uuid = req.param('device_uuid');
    d.device_version = req.param('device_version');
    d.device_model = req.param('device_model');
    d.device_lat = (req.param('device_lat')) ? req.param('device_lat') : 0.0;
    d.device_lng = (req.param('device_lng')) ? req.param('device_lng') : 0.0;
    d.device_access_count = (req.param('device_access_count')) ? req.param('device_access_count') : 0;
    d.device_network_state = req.param('device_network_state');
    d.device_network_description = req.param('device_network_description');
    d.device_accuracy = req.param('device_accuracy'),
    d.device_altitude = req.param('device_altitude');
    d.device_altitudeAccuracy = req.param('device_altitudeAccuracy');
    d.device_heading = req.param('device_heading');
    d.device_speed = req.param('device_speed');
    d.device_timestamp = req.param('device_timestamp');

    return d;
};

module.exports = DeviceController;





/*
 device_entity_id : 'string',
 device_name: 'string',
 device_cordova: 'string',
 device_platform: 'string',
 device_uuid: 'string',
 device_version: 'string',
 device_model: 'string',
 device_lat : 'float',
 device_lng : 'float',
 device_access_count : 0
* */


/*
module.exports = {
    
  


 *
   * Overrides for the settings in `config/controllers.js`
   * (specific to DeviceController)

  _config: {}

  
};
*/
