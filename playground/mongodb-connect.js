const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	/*db.collection('Todos').insertOne({
		text:'Hello MongoDB'
		}, (err, result) => {
			if(err){
				return console.log('Unable to insert todo', err);
			}
			console.log(JSON.stringify(result.ops, undefined, 2));
		}
	);*/

	db.collection('Users').insertOne({
		name:'Jack', age:4, location: 'Verona, Italy'
	}, (err, result) => {
		if(err){
			return console.log(err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});