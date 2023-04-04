const CardService = require("./Service");

class CardController {
    service;
    constructor() {
        this.service = new CardService();
    }

    getCardByName(req, res) {
        const { name } = req.params;
        this.service.getCardByName(name).then(cards => res.status(200).json(cards)).catch(err => console.log(err));
    }
    createCard(req, res) {
        this.service.createCard(req.body).then(newCard => res.status(201).json(newCard)).catch(err => console.log(err));
    }

}

module.exports = CardController;