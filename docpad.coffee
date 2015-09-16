# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	plugins:
	    ghpages:
	        deployRemote: 'target'
	        deployBranch: 'master'
	    nodesass:
	    	outputStyle: 'compressed'	# nested / compressed
	    grunt:
	    	writeAfter: false
	    	generateAfter: []
	    	warnOnError: true
		cleancss:
	        # These are options passed to the clean-css dependency
	        cleancssOpts:
	            # * for keeping all (default), 1 for keeping first one only, 0 for removing all
	            keepSpecialComments: '0'

	            # Whether to keep line breaks
	            keepBreaks: false

	            # Turns on benchmarking mode measuring time spent on cleaning up.
	            benchmark: true

	            # Whether to process @import rules.
	            processImport: false

	            # Set to false to skip URL rebasing
	            rebase: false

	            # Set to false to disable advanced optimizations
	            advanced: false

	            # Set to true to get minification statistics under stats property
	            debug: false

	        # Disabled on development environments by default.
	        environments:
	            development:
	                enabled: true
}

# Export the DocPad Configuration
module.exports = docpadConfig