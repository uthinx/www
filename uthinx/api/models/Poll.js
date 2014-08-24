/**
 * Poll
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var Poll = {

  attributes: {
  	/* e.g.
  	nickname: 'string'
  	*/
      poll_title: 'string',
      poll_duration : 'string',
      poll_description: 'string',
      poll_is_public : 'boolean',
      poll_entity_vote : 'string',
      poll_type_id: 'integer',
      poll_participants: 'integer',
      poll_invitation_circles : 'array',
      poll_start_timestamp : 'timestamp',
      poll_invitation_entities : 'array',
      poll_creator_entity_id : 'integer',
      poll_type : 'string',
      poll_type_id : 'string'
  }

};

module.exports = Poll;
