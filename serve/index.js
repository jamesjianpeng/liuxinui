require('@babel/register')({
  "plugins": [
    ["@babel/plugin-transform-async-to-generator", {
      "module": "bluebird",
      "method": "coroutine"
    }]
  ],
  "presets": [
    [
        "@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 2
        }
    ]
  ]
})

require('./app.js');

