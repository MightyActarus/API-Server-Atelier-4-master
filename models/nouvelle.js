const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(categorie, titre, texte, imageUrl, date) {
            super();
            this.Category = categorie !== undefined ? categorie : "";
            this.Title = titre !== undefined ? titre : "";
            this.Text = texte !== undefined ? texte : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("Title");
            this.addValidator('Category', 'string');
            this.addValidator('Title', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', 'string');
        }
    }