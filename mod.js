G.AddData({
name:'Test mod',
author:'Genertoror',
desc:'A simple test mod that adds cookies',
engineVersion:1,
manifest:'https://rawgit.com/Generatoror/hello-world/master/catManifest.js',
requires:['Default dataset*'],
sheets:{'cookieSheet':'https://raw.githubusercontent.com/Generatoror/hello-world/master/sprits.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	
	//Then we augment the base data to incorporate our new resources :
		//adding wheat as something that can be gathered from grass
		//adding a new mode to furnace so they can make hot sauce from hot peppers
	G.getDict('mine').modes['gems']='gems':{name:'Gems',icon:[7,9],desc:'Mine for [gems] with x5 efficiency.',req:{'prospecting':true},use:{'worker':3,'metal tools':3}};
	G.getDict('mine').effects.push({type:'gather',context:'mine',what:{'gems':50},max:30,mode:'gems'});
	G.getDict('kiln').modes['glass']='glass':{name:'Blow glass',icon:[4,8],desc:'Produce 5 [glass] out of 1 [sand].',use:{'worker':1,'metal tools':1},req:{}};
	G.getDict('kiln').effects.push({type:'convert',from:{'sand':1},into:{'glass':5},every:5,mode:'glass'});
	
	//Then we add a new technology which is required by the artisans to gain access to the "hot sauce" mode :
	new G.Tech({
		name:glass blowing',
		desc:'@unlocks [kiln]s can now produce [glass] out of [sand].<>',
		icon:[27,6],
		cost:{'insight':40},
		req:{'masonry':true},
		effects:[
		],
	});
	
	//Finally, we add a trait that amplifies the benefits of consuming hot sauce; it will take on average 20 years to appear once the conditions (knowing the "Hot sauce preparing" tech) is fulfilled
			
	//There are many other ways of adding and changing content; refer to /data.js, the default dataset, if you want to see how everything is done in the base game. Good luck!
}
});
