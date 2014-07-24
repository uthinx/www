/**
 * PollTypes
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	/* e.g.
  	nickname: 'string'
  	*/
      poll_type_title: 'string',
      poll_type_description: 'string',
      poll_type_deleted_date : 'datetime',
      poll_type_approved_date : 'datetime',
      poll_type_creator_entity_id : 'integer',
      poll_type_render_order : 'integer'
  }

};

/*
db.polltypes.insert({
    poll_type_title: 'Sports',
    poll_type_description: 'Polls about sporting events.'
});

db.polltypes.insert({
    poll_type_title: 'Politics',
    poll_type_description: 'Polls about political events.'
});

db.polltypes.insert({
    poll_type_title: 'Technology',
    poll_type_description: 'Polls about Tech events.'
});


db.polltypes.insert({
    poll_type_title: 'Entertainment',
    poll_type_description: 'Polls about Entertainment events.'
});

db.polltypes.insert({
    poll_type_title: 'Fashion',
    poll_type_description: 'Polls about Fashion events.'
});

db.polltypes.insert({
    poll_type_title: 'News',
    poll_type_description: 'Polls about news events.'
});

db.polltypes.insert({
    poll_type_title: 'Social',
    poll_type_description: 'Polls about social events, items, behaviors.'
});
*/