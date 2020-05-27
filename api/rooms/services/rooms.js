'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  bookRoom: async (roomId, date) => {

      const room = await strapi.query('rooms').findOne({id: roomId})
      const existingBooking = await strapi.query('booking')
        .findOne({
          'room.id': roomId,
          bookingDate: date,
        })

      // cannot book twice on same day
      if(existingBooking){
        throw new Error(`Room ${room.title} is already booked on ${new Date(date).toDateString()}`)
      }

      const { id, title, images, description, capacity } = room;
      const newBooking = {
        bookingDate: date,
        room: {
          id, title, images, description, capacity
        },
      };

      // Book the room
      const result = await strapi.query('booking').create(newBooking);
      return result;

  }
};
