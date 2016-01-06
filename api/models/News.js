/**
* News.js
*
* @description :: TODO: Representa las novedades que se enviaran a los integrantes de InTraffic.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	connection: 'somePostgresqlServer',

	tableName: "news",

    attributes: {
  	
      	id: {
      		type: 'integer',
      		autoIncrement: true,
      		primaryKey: true
      	},

      	subject: {
      		type: 'string',
      		required: true
      	},

      	message: {
      		type: 'text',
      		required: true
      	},

      	fecha: {
    		type: 'date'
    	},

        fechaupdate: {
            type: 'date'
        }
    },
    autoCreatedAt: false,
    autoUpdatedAt: false

};

