module.exports = {

sendEmail: function(options) {

        var template = "email";

        var data = {
            recipientName: "Team",
            senderName: "News",
            senderEmail: "email@hotmail.com",
            message: options.message,
            subject: options.subject,
            fecha: options.fecha
        };

        var opts = {
                "subject": options.subject,
                "from_email": "email@hotmail.com",
                "from_name": "Service",
                "to": "another_email@hotmail.com",
                "text": options.message            
        };

        sails.hooks.email.send(template, data, opts, function(err) {
            if (err) {sails.log.debug(err); }
            else { sails.log.debug("Sent"); }            
        });
    }
};