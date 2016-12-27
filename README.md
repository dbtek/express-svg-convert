express-svg-convert
===

A straightforward express server that converts multipart/form-data svg files to pdf or png files.
Uses [librsvg](https://npmjs.com/package/librsvg), [express](https://npmjs.com/package/express), [express-fileupload](https://npmjs.com/package/express-fileupload).

### Install
- Download or clone repo.
- cd into downloaded & extracted folder
```bash
$ npm install
```

### Run
```bash
$ node .
```

#### Exposed end points

- `/sample` : Converts bundled sample.svg
- `/api/convert`: Convert api.

### Params

Supported params are: format, scale.
> `http://localhost:8081/api/convert?format=[png|pdf]&scale=[number]`

#### Custom Port

```bash
$ export SVG_CONVERT_PORT=8001
```

### Usage

Sample usage in browser:
```js
var svg = `
  <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="500" height="500" id="svg2" version="1.1" inkscape:version="0.48.2 r9819" sodipodi:docname="ANCHOR_030deg.svg">
  <defs id="defs4"/>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:groupmode="layer" id="layer2" inkscape:label="svg" style="display:inline">
    <g id="g4148" transform="matrix(0.8660254,0.5,-0.5,0.8660254,198.83494,-98.834071)">
      <path inkscape:connector-curvature="0" id="path4146" d="m 216.69031,428.60519 37.56364,37.11654 37.62715,-37.11654 z" style="fill:#000000;fill-opacity:1;stroke:none"/>
      <g id="g3997-5" style="fill:#000000;fill-opacity:1;display:inline" transform="matrix(-0.27230081,-0.96221217,0.96221217,-0.27230081,-31.837141,377.40848)">
        <g style="fill:#000000;fill-opacity:1" transform="translate(-7.1896451,-7.7450857)" id="g4038">
          <path sodipodi:nodetypes="cccc" inkscape:transform-center-y="7.4710586" inkscape:transform-center-x="-30.393694" inkscape:connector-curvature="0" id="path3873-2-11-2" d="M 0.34683933,196.22343 86.019047,143.2924 -4.5583417,99.279254 z" style="fill:#000000;fill-opacity:1;stroke:none;display:inline"/>
        </g>
      </g>
      <path sodipodi:nodetypes="cc" inkscape:connector-curvature="0" id="path3932" d="m 109.50577,362.10026 c 14.7661,48.80394 69.61713,70.0632 129.77994,70.0632" style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
      <path inkscape:connector-curvature="0" id="path3805" d="m 254.28571,133.61514 0,287.13077" style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
      <path transform="matrix(0.55555556,0,0,0.51282051,190.39682,74.093383)" d="m 151,87 c 0,21.53911 -16.11775,39 -36,39 -19.882251,0 -36,-17.46089 -36,-39 0,-21.539105 16.117749,-39 36,-39 19.88225,0 36,17.460895 36,39 z" sodipodi:ry="39" sodipodi:rx="36" sodipodi:cy="87" sodipodi:cx="115" id="path3807" style="fill:#000000;fill-opacity:1;stroke:none" sodipodi:type="arc"/>
      <path transform="matrix(1.042638,0,0,0.96243498,134.38234,-2.5580401)" d="m 151,87 c 0,21.53911 -16.11775,39 -36,39 -19.882251,0 -36,-17.46089 -36,-39 0,-21.539105 16.117749,-39 36,-39 19.88225,0 36,17.460895 36,39 z" sodipodi:ry="39" sodipodi:rx="36" sodipodi:cy="87" sodipodi:cx="115" id="path3807-4" style="fill:none;stroke:#000000;stroke-width:19.96537781;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none" sodipodi:type="arc"/>
      <path inkscape:connector-curvature="0" id="path3805-8" d="m 333.53068,185.52121 -158.48994,0" style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
      <g id="g3997-5-1" style="fill:#000000;fill-opacity:1;display:inline" transform="matrix(0.27230081,-0.96221217,-0.96221217,-0.27230081,540.40856,377.40848)">
        <g style="fill:#000000;fill-opacity:1" transform="translate(-7.1896451,-7.7450857)" id="g4038-4">
          <path sodipodi:nodetypes="cccc" inkscape:transform-center-y="7.4710586" inkscape:transform-center-x="-30.393694" inkscape:connector-curvature="0" id="path3873-2-11-2-2" d="M 0.34683933,196.22343 86.019047,143.2924 -4.5583417,99.279254 z" style="fill:#000000;fill-opacity:1;stroke:none;display:inline"/>
        </g>
      </g>
      <path sodipodi:nodetypes="cc" inkscape:connector-curvature="0" id="path3932-3" d="m 399.06565,362.10026 c -14.7661,48.80394 -69.61713,70.0632 -129.77994,70.0632" style="fill:none;stroke:#000000;stroke-width:30;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>
    </g>
  </g>
</svg>`

var formData = new FormData()
formData.append('svg', new Blob([svg]))

fetch('http://localhost:8081/api/convert', {
  method: 'POST',
  body: formData
})
.then(data => {
  console.log(data)
})
.catch(err => console.log(err))
```
