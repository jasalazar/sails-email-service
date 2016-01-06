/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
    	var id = req.param('id');
    	var subject = req.param('subject');
    	var message = req.param('message');
    	var fecha = new Date();
    	var fechaUpdate = fecha;

    	var news = {
    		id: id,
    		subject: subject,
    		message: message,
    		fecha: fecha,
    		fechaUpdate: fechaUpdate
    	};
    	var to = global.to;

    	News.create(news).exec(function(err, result){

            if (err) {

                sails.log.debug('error ' + err);

                return res.json( 500, { error: 'Some error occured' });

            }

            sails.log.debug('Success', JSON.stringify(result));

            EmailService.sendEmail(news);

			return res.json( 200, result );
        });

  	},

  	findOne: function(req, res) {
  		var id = req.param('id');

  		News.findOne(id, function(err, news){
			if (news === undefined) return res.notFound();
			if (err) return res.serverError(err);

			sails.log.debug('Success', JSON.stringify(news));

			return res.view(news);
		});
  	},

  	update: function(req, res) {
  		var id = req.param('id');
    	var subject = req.param('subject');
    	var message = req.param('message');
    	var fechaUpdate = new Date();

  		if (!id) {
            return res.badRequest('No id provided.');
        }

        News.update({id:id},{subject:subject,message:message,fechaUpdate:fechaUpdate}).exec(function afterwards(err, updated){
        	
        	if (err) return res.serverError(err);
        	return res.json( 200, updated );
        });
  	},

	destroy: function (req, res) {
		var id = req.param('id');

		if (!id) {
            return res.badRequest('No id provided.');
        }

        News.findOne(id).exec(function(err, result){
        	if (err) res.serverError(err);
        	if (!result) res.notFound();

        	News.destroy(id, function(err){
        		if (err) res.serverError(err);
        		return res.redirect("/news");
        		//return res.json(result);
        	});
        });
  	},

  	find: function(req, res) {
        News.find().sort().exec(function(err, news) {
        	if (err) return res.serverError(err);
            return res.view('index', {News: news});
        });

		/*News.query('SELECT * FROM news', function(err, results) {
			if (err) return res.serverError(err);
			return res.view('index', {News: results.rows});
		});*/
    }

};