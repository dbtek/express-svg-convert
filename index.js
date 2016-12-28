'use strict'

const express = require('express')
const Rsvg = require('librsvg').Rsvg
const fileupload = require('express-fileupload')
const fs = require('fs')
const port = process.env.SVG_CONVERT_PORT || 8001
const crypto = require('crypto')

let options = {
  format: 'pdf',
  scale: 1
}

/**
 * Renders svg via librsvg
 * @return {Object} rsvg Rsvg instance
 * @return {Buffer}      Resulting buffer
 */
function renderSvg (rsvg, opts) {
  if (!opts) {
    opts = options
  }
  return new Buffer(rsvg.render({
    format: opts.format,
    width: opts.width || rsvg.width * opts.scale,
    height: opts.height || rsvg.height * opts.scale
  }).data, 'application/pdf')
}

// create express app
const app = express()
// add file upload middleware
app.use(fileupload())
// add api ket authorization
app.use(require('apikey')(auth, 'vault'));

function auth (key, fn) {
  if (process.env.SVG_CONVERT_API_KEY === key)
    fn(null, {})
  else
    fn(null, null)
}

/**
 * Extracts options from request params
 * @type {Object}
 */
function getOptions (req) {
  let params = Object.assign({}, options)
  let format = req.query.format
  let scale = parseInt(req.query.scale)
  if (format && format in ['pdf', 'png']) {
    params.format = format
  }
  if (scale && typeof scale === 'number' && scale !== 0) {
    params.scale = scale
  }
  return params
}

// sample file conversion endpoint
app.get('/sample', (req, res) => {
  const params = getOptions(req)
  const opts = Object.assign({}, options, {})
  try {
    fs.readFile('sample.svg', function (err, data) {
      if (err) throw err
      const rsvg = new Rsvg(data)
      const output = renderSvg(rsvg, params)
      res.attachment('sample.' + params.format)
        .send(output)
    })
  }
  catch (ex) {
    res.status(500)
      .json(JSON.stringify({
        error: 'Bad request',
        message: ex.message
      }))
  }
})

// checks request health
const checkReq = (req) => {
  if (!req.files) {
    throw new Error('Request should include a multipart/form-data')
  }
  if (!req.files.svg) {
    throw new Error('Svg file should be added to form-data with name "svg".')
  }
}

// convert api, only supports POST
app.post('/api/convert', (req, res) => {
  try {
    checkReq(req)
    const params = getOptions(req)
    // instantiate rsvg
    const file = req.files.svg
    const rsvg = new Rsvg(file.data)
    const output = renderSvg(rsvg, params)
    res.attachment('converted.' + params.format)
      .send(output)
  } catch (ex) {
    res.status(500)
      .json(JSON.stringify({
        error: 'Bad request',
        message: ex.message
      }))
  }
})

// start server
app.listen(port, () => {
  console.log(`SVG Converting Service started on ${port}`)
})
