'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  book: async ctx => {
    const body = ctx.request.body;

    // Validation stuffs
    if(body.date == null){
      throw new Error('Validation Error: date should not be null')
    }
    if(body.roomId == null){
      throw new Error('Validation Error: roomId should not be null')
    }

    const result = await strapi.services.rooms.bookRoom(body.roomId, body.date);

    return result
  }
};
