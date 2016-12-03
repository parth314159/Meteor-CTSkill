import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import {SAT} from '/Collections/SAT.js';

Meteor.startup(() => {
  // code to run on server at startup

  SAT.remove({});

  if(SAT.find().count() === 0){
  	HTTP.call("GET", "https://data.ct.gov/resource/u9i5-jm4j.json",function (error, result) {
  		if (!error) {

  			//console.log(result);
  			//var myjson = JSON.parse(result.data.toString());

  			/* result.forEach(function (data) {
    			SAT.insert(data);
  			});*/
  			var data = result.data;
  			console.log(data);
  			for(record in data) {
  				console.log(data[record]);
  				SAT.insert(data[record]);
  			}

  		}});
  }

});
