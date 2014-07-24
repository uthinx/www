/**
 * Circles
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Circles = {

  attributes: {
  	/* e.g.
  	nickname: 'string'
  	*/
      circle_name: 'string',
      circle_entity_id: 'integer',
      circle_entities: 'array',
      circle_description: 'string',
      circle_delete_date: 'datetime',
      circle_create_date: 'datetime'
  }

};

module.exports = Circles;
