var GitHub = require('Github-api');
var prompt = require('prompt');
const { spawn } = require('child_process');

prompt.start();
process.chdir('/Users/hardy/repo');
console.log("file location"+__filename);

prompt.get(['username', 'password'], function (err, {username, password}){

	//basic auth
var  gh = new GitHub({
	username,
	password
});

		console.log({gh});
		var me=gh.getUser();
	me.listRepos(function(err, repos){


		//look at the starred repos
		console.log(repos);
		repos.map((repo)=>{ 
		console.log(repo.url);

		const ls = spawn('git', ['clone', repo.clone_url]);

		})
	});
});


