import Ember from 'ember';

var FileReaderService = Ember.Service.extend({
  // Returns a promise that reads a file, converts it to a data URI,
  // and resolves with the result.
  readToDataURI (file) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function (e) { resolve(e.target.result); };
      reader.readAsDataURL(file);
    });
  }
});

export default FileReaderService;
