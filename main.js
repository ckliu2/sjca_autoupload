const hbjs = require('handbrake-js');
const ffmpeg = require('fluent-ffmpeg');
//var ffmpeg = require('ffmpeg');

var Vimeo = require('vimeo').Vimeo;

const convertFile = async () => {

    const options = {
        input: './source/hinehi.avi',
        output: './output/hinehi.mp4',
      };

    /*  
    hbjs.spawn(options)
    .on('error', err => {
      console.log('convertFile err',err);
    })
    .on('progress', progress => {
      console.log( 'Percent complete: %s %', progress.percentComplete);
    }).on('complete', progress => {
        console.log('complete ok.');
    });
    */
    const CLIENT_ID='34f77e7d3583b3f89b3ec74ad1a66b4cad85860e';
    const CLIENT_SECRET='ABloveumgTFDtwI18/JTuE5hN97YAqJHE5frRTSZXdABxGaxAmTkFHJkntDb8oVqkPGwHY0+StHkiOf1wsnJITK5nI+FABsEd9JPJ+7BgYA9WhFYKp5yhFklyigjHKR0';
    const ACCESS_TOKEN='93c2d3ae8be344a4bdd671757bd247d4';
    const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

    client.upload(
      './output/hinehi.mp4',
      function (uri) {
        console.log('File upload completed. Your Vimeo URI is:', uri)
      },
      function (bytesUploaded, bytesTotal) {
        var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
        console.log(bytesUploaded, bytesTotal, percentage + '%')
      },
      function (error) {
        console.log('Failed because: ' + error)
      }
    )

   
 
   
};  


convertFile();