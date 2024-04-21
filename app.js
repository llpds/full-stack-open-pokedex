const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))


app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT+1, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
  /* eslint-enable no-console */
})
