module.exports = {
  hasNull: (body, atributes) => {
    for(const atribute of atributes) {
      if(!body[atribute] || body[atribute] === undefined || body[atribute] === null) {
        return true;
      }
    }
    return false;
  }
}