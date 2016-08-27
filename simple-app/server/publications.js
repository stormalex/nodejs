Meteor.publish('posts', function() {
	return Posts.find();		//只发布某一个作者的，但是隐藏url字段
})
