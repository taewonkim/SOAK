(function(context){
	"use strict";

	var reloadStatus = false,
		util = new Util(),
		message = new Message(),
		list = new List();
	
	context.$ = util.$;
	context.list = list;
	context.onload = function(){
		var _httpRegex = /^(http\:\/\/|https\:\/\/)/;
		chrome.tabs.query({
			active: true,
			currentWindow: true
		},function(tabs){
			if(_httpRegex.exec(tabs[0].url)){
				list.update();
			}else{
				list.hide();
			}
		});
	};



	function Util(){
		return {
			$ : function( $query ){
				var elements = document.querySelectorAll($query);
				return elements.length > 1 ? elements : elements[0];
			}
		};
	}



	function Message(){

		return {
			send : function(obj){
				alert(obj);
			},

			handle: function(){

			}
		};

	}



	function List(){
		var repository = [],
			que = [];

		return {

			update : function(){
				message.send({
					type : '',

				}, message.handle);
			},

			add : function(){

			},

			remove : function(){

			},

			search : function(){

			},

			hide: function(){
				$('.invalid-url').style.display = 'block';
			}


		};
	}


})(this);