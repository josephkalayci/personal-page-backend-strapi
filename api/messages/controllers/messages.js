"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    console.log(ctx.request.body);

    // Store the new user in database.
    const entity = await strapi.services.messages.create(ctx.request.body);

    strapi.services.email.send(
      "joseph.kalayci@gmail.com", // sender address
      entity.senderEmail, // list of receivers
      ["joseph.kalayci@gmail.com", "yb.kalayci@gmail.com"],
      "Confirmation email", // Subject line
      //text: message, // plain text body
      `<html><body><div>Hi ${entity.name},<div><br></div><div>Thank you for reaching out to me. I received your following message and will get back to you as soon as possible.</div><div><br></div><div>message:${entity.message}</div><div><br></div><div><br></div><div>Sincerely,</div><div><br></div><div>Joseph Y. Kalayci</div><div>joseph.kalayci@gmail.com</div><div>(647)606-9696</div></div></body></html>` // html body
    );

    // Send response to the server.
    return sanitizeEntity(entity, { model: strapi.models.messages });
  },
};
