const Vue = require('vue')
const express = require('express')
const app = express();

const renderer = require('vue-server-renderer').createRenderer()

// var outHtml;

// const vm = new Vue({
//   render (h) {
//     return h('div', 'hello')
//   }
// })

// renderer.renderToString(vm, (err, html) => {
//   outHtml = html;
// })

// app.get('/', (req, res) => {
//   res.write(outHtml);
//   res.end();
// })

// const vm = new Vue({
// 	render (createElement) {
// 		return createElement(
// 		    'div',
// 		    {
// 		    	attrs: {
// 		    		id: 'foo'
// 		    	},
// 		    	style: {
// 				    color: 'red',
// 				    fontSize: '14px'
// 				}
// 		    },
// 		    [
// 		        createElement('a', {
// 		          attrs: {
// 		            name: 'headingId',
// 		            href: 'http://baidu.com'
// 		          }
// 		        },'bar')
// 		    ]
// 		)
// 	}
// })

const vm = new Vue({
	render (h) { // <-- h must be in scope
	    return  '<div>Hello world!</div>'
	}
})

app.get('/', (req, res) => {
  const stream = renderer.renderToStream(vm)

  res.write(`<!DOCTYPE html><html><head><title>...</title></head><body>`)

  stream.on('data', chunk => {
    res.write(chunk)
  })

  stream.on('end', () => {
    res.end('</body></html>')
  })
})

app.listen(3000);