"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeEntityBaseModel = void 0;
class FakeEntityBaseModel {
    constructor(entityName, initVlues) {
        this.table = [];
        this.currentId = 0;
        this.entityName = entityName;
        this.initTable(initVlues);
    }
    initTable(initVlues) {
        if (initVlues) {
            for (const el of initVlues) {
                this.table.push(el);
                this.currentId = el.id;
            }
        }
    }
    getAll() {
        // Возвращает все сущности
        return this.table;
    }
    getById(id) {
        // Возвращает сущность по ID
        const response = this.table.find((entity) => entity.id === id);
        return response ? response : {};
    }
    create(name) {
        // Создает новую сущность
        this.currentId += 1;
        this.table.push({ id: this.currentId, name: name });
        return this.getById(this.currentId);
    }
    update() {
        // Обновляет сущность по ID
        console.log("Not realised");
    }
    delete() {
        // Удаляет сущность по ID
        console.log("Not realised");
    }
}
exports.FakeEntityBaseModel = FakeEntityBaseModel;
