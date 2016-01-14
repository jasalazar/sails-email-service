# sails-email-service
Sails service that allows to send email after performing create action.

<b>Dependencies:</b>

sails-hook-email


Lets say you have a blog where you post news, your model is named "<b>News</b>" and it has the following attributes:

<li>Id</li>
<li>Subject</li>
<li>Message</li>
<li>Fecha (Date in spanish)</li>
<li>fechaupdate (update)</li>


Right after installing <code>npm install sails-hook-email</code> you set your EmailService file, just like this: <a href="https://github.com/jasalazar/sails-email-service/blob/master/api/services/EmailService.js">EmailService</a>.


Then, you have to set your "defaults" configuration in your "index" file on this path:

sails-hook-email -> index.js line 61, mine has the following code:

<code>defaults: {

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

If you set "testMode" config to <i>true</i>, then you won't actually send an email, but you will see the result as if you would have sent it; instead you would want to set it to <i>false</i> and it will be sent.


You also have to set your email template, this is what is going to be shown on the income message. For this, in the <b>views</b> folder, create another folder called <b>emailTemplates</b> and then one last folder inside of this called <b>email</b>, insi this last folder then you create your "<b>html.ejs</b>" file with your template.


Inside our "create" action, in our NewsController, lets call our email service method "sendEmail", just like this:

<code>EmailService.sendEmail();</code>


And that's a wrap!
