# sails-email-service
Sails service that allows to send email after performing create action

Dependencies:

sails-hook-email


Lets say you have a blog where you post news, your model is named "News" and it has the following attributes:

-Id
-Subject
-Message
-Fecha (Date in spanish)
-fechaupdate (update)

Inside "create" action, lets call our email service method "sendEmail" according to the following:

<code>EmailService.sendEmail();</code>


You previously have to set your "defaults" configuration in your "index" file on this path:

sails-hook-email>index.js line 61, mine has the following code:

<code>
defaults: {
  __configKey__: {
    service: 'Gmail',
    auth: {
      user: 'myemailaddress@gmail.com',
      pass: 'mypassword'
    },
    templateDir: path.resolve(sails.config.appPath, 'views/emailTemplates'),
    from: 'noreply@hydra.com',
    testMode: true
  }
}
</code>