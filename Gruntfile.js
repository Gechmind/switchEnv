module.exports = function(grunt){
	var workspaceXml = "";
	var env = "";

	grunt.initConfig({
		commands:{
			options:{force:false},
			endTomcat:{
				cmd:[{
					cmd:'stop.bat',
					force:true
				}]
			},
			startTomcat:{
				cmd:[{
					cmd:'start.bat',
					force:true
				}]
			},
			endNginx:{
				cmd:[{
					cmd:"stop.bat",
					force:true
				}]
			},
			startNginx:{
				cmd:[{
					cmd:"start.bat",
					force:true
				}]
			}
		},
		replace:{
			tomcat:{
				workspaceXml:[workspaceXml]
				overwirte:true,
				replacements:[{
					from:/.*/,
					to:env
				}]
			},
			nginx:{
				config:[]
				overwirte:true,
				replacements:[
					from:/.*/,
					to:env
				]
			}
		}
	})

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-commands');
}