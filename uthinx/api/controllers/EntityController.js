/**
 * EntityController
 *
 * @module      :: Controller
 * @description    :: A set of functions called `actions`.
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


// Comment controller with generated actions.
var EntityController = {
    create: function (req, res) {
        var response = { "ok": false, "id": req.param('id') };

        Entity.create(setEntityFields({}, req)).done(function (err, entity) {
            // Error handling
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
            } else {
                return res.json(entity);
            }
        });

    },
    read: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id },
            params = { "_id": id };

        Entity.find(params).exec(function (err, entity) {
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
                //return res.send(err,500);
            }
            else if (!entity) {
                response.desc = "No entity can be found";
                return res.json(response);
                //return res.send("No other chicken with that id exists!", 404);
            }
            else if (entity && entity.length > 0) {
                //need to add the polls that the entity has relations with
                response.ok = true;
                entity.polls = getEntityPolls(entity._id);


                return res.json(entity);
            } else {
                // For example
                response.ok = true;
                response.none = true;
                response.desc = "Entity Not found";
                return res.json(response);
            }
        });
    },
    readByDeviceId: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id },
            params = { "entity_device_ID": id };

        Entity.find(params).exec(function (err, entity) {
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
                //return res.send(err,500);
            }
            else if (!entity) {
                response.desc = "No entity can be found";
                return res.json(response);
                //return res.send("No other chicken with that id exists!", 404);
            }
            else if (entity && entity.length > 0) {
                //need to add the polls that the entity has relations with
                response.ok = true;
                return res.json(entity);
            } else {
                // For example
                response.ok = true;
                response.none = true;
                response.desc = "Entity Not found";
                return res.json(response);
            }
        });
    },
    readByFacebookId: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id },
            params = { "entity_facebook_ID": id };

        Entity.find(params).exec(function (err, entity) {
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
                //return res.send(err,500);
            }
            else if (!entity) {
                response.desc = "No entity can be found";
                return res.json(response);
                //return res.send("No other chicken with that id exists!", 404);
            }
            else if (entity && entity.length > 0) {
                //need to add the polls that the entity has relations with
                response.ok = true;
                return res.json(entity);
            } else {
                // For example
                response.ok = true;
                response.none = true;
                response.desc = "Entity Not found";
                return res.json(response);
            }
        });
    },
    update: function (req, res) {
        var id = req.param('id') || 0,
            response = { "ok": false, "id": id },
            params = { "_id": id };

        Entity.find(params).exec(function (err, entity) {
            if (err) {
                response.err = err;
                response.desc = "Error";
                return res.json(response);
                //return res.send(err,500);
            }
            else if (!entity) {
                response.desc = "No entity can be found";
                return res.json(response);
                //return res.send("No other chicken with that id exists!", 404);
            }
            else if (entity && entity.length === 0) {
                response.desc = "Entity has been found";

                response.type = ( typeof entity );
                return res.json(response);
            } else {
                //sets the new fields if they are their
                entity = setEntityFields(entity, req);

                entity.save(function (err) {
                    if (err) {
                        response.desc = "Error";
                        return res.json(response);
                    }
                    else {
                        //
                        response.err = err;
                        response.desc = "Error";
                        return res.json(entity);
                    }
                });
            }
        });
    },
    destroy: function (req, res) {
        return res.json({ "ok": false });

    }
};

function getEntityPolls(id) {
    var params = { poll_creator_entity_id: id, poll_invitation_entities: { $in: [ id ] } };

    Poll.find(params).exec(function (err, polls) {
        if (err) {
            return [];
        }
        else if (!polls) {
            return [];
            //return res.send("No other chicken with that id exists!", 404);
        }
        else {
            return polls;
        }
    });
};

function setEntityFields(entity, req) {
    var e = entity || {};

    e.entity_first_name = (req.param('entity_first_name')) ? req.param('entity_first_name') : e.entity_first_name;
    e.entity_last_name = ( req.param('entity_last_name') ) ? req.param('entity_last_name') : e.entity_last_name;
    e.entity_name = ( req.param('entity_name') ) ? req.param('entity_name') : e.entity_name;
    e.entity_user_name = ( req.param('entity_user_name') ) ? req.param('entity_user_name') : e.entity_user_name;
    e.entity_facebook_ID = ( req.param('entity_facebook_ID') && e.entity_facebook_ID === undefined ) ? req.param('entity_facebook_ID') : e.entity_facebook_ID;
    e.entity_device_ID = ( req.param('entity_device_ID') && e.entity_device_ID === undefined ) ? req.param('entity_device_ID') : e.entity_device_ID;
    e.entity_profile_img = ( req.param('entity_profile_img') ) ? req.param('entity_profile_img') : e.entity_profile_img;
    e.entity_age = ( req.param('entity_age') ) ? req.param('entity_age') : e.entity_age;
    e.entity_birth_date = (req.param('entity_birth_date')) ? req.param('entity_birth_date') : e.entity_birth_date;
    e.entity_phone = ( req.param('entity_phone') ) ? req.param('entity_phone') : e.entity_phone;
    e.entity_email = ( req.param('entity_email') ) ? req.param('entity_email') : e.entity_email;
    e.entity_gender = (req.param('entity_gender')) ? req.param('entity_gender') : e.entity_gender;
    e.entity_locale = ( req.param('entity_locale') ) ? req.param('entity_locale') : e.entity_locale;
    e.entity_link = ( req.param('entity_link') ) ? req.param('entity_link') : e.entity_link;

    return e;
};

module.exports = EntityController;


/**
 module.exports = {





   * Overrides for the settings in `config/controllers.js`
   * (specific to EntityController)

  _config: {}


};
 */