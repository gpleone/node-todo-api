const {MongoClient, ObjectID }= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// findOneAndUpdate
	db.collection('Users').findOneAndUpdate( {
		_id: new ObjectID('586bef90aea5a42430a8fa0d')
	}, {
		$set:{
			name:'Geppetto'
		},
		$inc:{
			age:100
		},
		$rename:{
			location:'city'
		}
	}, {
		returnOriginal: false
	}
	).then((result) => {
		console.log(result);
	});
	//db.close();
});