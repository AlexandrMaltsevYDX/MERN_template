"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityBaseHandler = void 0;
class AbstractEntityBaseHandler {
    constructor(model) {
        this.get = (req, res) => {
            if (req.params.id) {
                // Your code to fetch an item by its ID goes here
                // You can access the ID with req.params.id
                res.send(this.model.getById(Number(req.params.id)));
            }
            else {
                // Your code to fetch all items goes here
                res.send(this.model.getAll());
            }
        };
        this.post = (req, res) => {
            res.send(this.model.create(req.body));
        };
        this.put = (req, res) => {
            res.send(`Update item ${this.model.entityName}`);
        };
        this.delete = (req, res) => {
            res.send(`Delete item ${this.model.entityName}`);
        };
        this.model = model;
    }
}
class EntityBaseHandler extends AbstractEntityBaseHandler {
}
exports.EntityBaseHandler = EntityBaseHandler;
