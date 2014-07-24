/**
 * Device
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var Device = {

    attributes: {
        /* e.g.
         nickname: 'string'
         */
        device_entity_id : 'string',
        device_name : 'string',
        device_cordova : {
            type : 'string',
            required : true
        },
        device_platform : {
            type : 'string',
            required : true
        },
        device_uuid : {
            type : 'string',
            required : true
        },
        device_version : {
            type : 'string',
            required : true
        },
        device_model : {
            type : 'string',
            required : true
        },
        device_lat : 'float',
        device_lng : 'float',
        device_access_count : 0,
        device_network_state : 'string',
        device_network_description : '',
        device_altitude: 'integer',
        device_accuracy: 'integer',
        device_altitudeAccuracy: 'integer',
        device_heading : 'integer',
        device_speed : 'integer',
        device_timestamp: 'datetime'
    }

};

module.exports = Device;