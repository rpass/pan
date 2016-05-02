function Note(){
  this.content = 'No content set';
  this.setContent = function setContent(content){
    this.content = content;
  }
}

module.exports = Note;
