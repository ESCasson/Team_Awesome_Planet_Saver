module.exports = {
  pages: {
		index: {
			entry: 'src/main.js',
			template: 'public/index.html'
		},
		content: 'src/content/main.js',
    module: 'src/modules/main.js',
		quiz: 'src/quiz/main.js',
		home: 'src/home/main.js',
		login: 'src/login/main.js',
		register: 'src/register/main.js'
  },
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      }
    }
  }

  }
