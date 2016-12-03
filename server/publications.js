import { Meteor } from 'meteor/meteor';
import { SAT } from '/Collections/SAT.js';

Meteor.publish('sat', function SATPubliication(){
	return SAT.find();
});

/*Meteor.publish('district', function SATPubliication(){
	return SAT.distinct("district");
});*/