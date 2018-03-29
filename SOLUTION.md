Photo mosaic solution
---------------------

The goal of this task was to implement photomosaic of the original image.
The flow in app includes the following:
1. User can upload/select an image using file upload.
2. User can drag-and-drop an image for file upload.
3. On upload, the image will be shown to the user.
4. On clicking the create mosaic button, a composited photomosaic will be rendered on the screen.

*Modifications*

I included the skeleton css for pretty ui and qunit library for testing.

*Tests*

Visiting the `/tests` url will run the given unit tests in `tests.js` using QUnit serverd from `qunit.html`. I modified server.js to include the given route, but didn't changed any other thing nor included other libraries.

*Glitches*
1. For some images, the render still shows half rendered rows, could be because of white color tiles.
2. Most of the time is spend on scripting the getImageData method in the for loop, could be avoided using the global one time fetch of getImageData and parsing the DataView to calculate average color. I found it to take almost same time as making a getImageData request, a little better though. I also had problem with parsing and correctly displaying the DataView, hence didn't include that averaging.
3. On Profiling the app, there is still some time gone in idle while most of the time was spend doing scripting. Still don't know why there is time spent in sitting idle.

*Internet References*
1. Used Promise, XMLHttpRequest, FileReader and Image from Mozilla manual.
2. File Drag and Drop was taken Sitepoint post.
3. Render was taken from some stackoverflow link.

*Optimizations that could be done*
* If color is same don't do network request. Could utilize caching with promises.
* Auto optimize for sending too many requests, use some kind of convoluted server which returns one row at a time.
* Worker could be utilized for getImageData but spawing TILE_HEIGHT*TILE_WIDTH workers hangs the browser and results in performance hit.
* Other solution where render after we resolve network request, found out to be little more expensive on memory and scripting.

### Screenshots could be found in screenshots folder