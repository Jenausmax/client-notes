module.exports = {
  "devServer": {
    "disableHostCheck": true,
    "host": "localhost",
    "port": 80,
    "proxy": {
      "^/api": {
        "target": "http://localhost:5001/",
        "changeOrigin": true
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
