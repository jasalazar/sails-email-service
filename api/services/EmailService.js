module.exports = {

sendEmail: function(options) {

        var template = "email";

        var data = {
            recipientName: "InTraffic Team",
            senderName: "InTraffic News",
            senderEmail: "jsal01@msn.com",
            message: options.message,
            subject: options.subject,
            fecha: options.fecha
        };

        var opts = {
                "subject": options.subject,
                "from_email": "jsal01@msn.com",
                "from_name": "Michi - Service",
                "to": "jsal01@msn.com; jose.perez@vikua.com; rafael.santelmo@vikua.com; eloy.chang.182@gmail.com",
                "text": options.message            
        };

        sails.hooks.email.send(template, data, opts, function(err) {
            if (err) {sails.log.debug(err); }
            else { sails.log.debug("Enviado"); }            
        });
    }
};