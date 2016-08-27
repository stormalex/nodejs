Meteor.publish('posts', function(author) {
	return Posts.find({author:author}, {fields:{url:false}});		//只发布某一个作者的，但是隐藏url字段
})
