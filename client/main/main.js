//import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { SAT } from '/Collections/SAT.js';
//district

Template.main.onCreated(function satcreated() {
	Meteor.subscribe('sat');
	this.tabdata = new ReactiveVar(SAT.find());
});

Template.main.helpers({
  sat:function(){
    return SAT.find({},{sort: {district: 1}});
  },

  tabledata:function() {
    return  Template.instance().tabdata.get();
  }
});

Template.main.events({

	'click	#search':	function	(event,	template){

		const district = template.find("#district").value;
		//alert(district);
		 event.preventDefault();
      //console.log(" sorting by time");
      	template.tabdata.set(SAT.find({'district':district}));
		//Session.set('table-data',);
	}
});