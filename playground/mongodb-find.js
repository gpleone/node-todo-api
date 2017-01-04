const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	db.collection('Todos').find().count().then(
		(count) => {
			console.log(`Todos ${count}`);
		},
		(err) => {
			console.log('There\'s an error', err);
		}
	);

	/*db.collection('Todos').find({_id:new ObjectID('586be8140f86e818449f6746')}).toArray().then(
		(docs) => {
			console.log('Todos');
			console.log(JSON.stringify(docs, undefined, 2));
		},
		(err) => {
			console.log('There\'s an error', err);
		}
	);*/

	db.close();
});