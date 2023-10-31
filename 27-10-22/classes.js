"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDeAnimais = void 0;
var leitor = require("readline-sync");
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.emitirSom = function () {
        console.log("Algum som de animal");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.emitirSom = function () {
        console.log("".concat(this.name, " diz Woof!"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.emitirSom = function () {
        console.log("".concat(this.name, " diz Meow!"));
    };
    return Cat;
}(Animal));
var SistemaDeAnimais = /** @class */ (function () {
    function SistemaDeAnimais() {
        this.dogs = [];
        this.cats = [];
        this.animals = [];
    }
    SistemaDeAnimais.prototype.cadastrarAnimal = function () {
        console.log("1 - Animal sem identifica\u00E7\u00E3o de esp\u00E9cie");
        console.log("2 - Cachorro");
        console.log("3 - Gato");
        var animal = leitor.questionInt("Informe o numero referente ao animal que deseja cadastrar: ");
        switch (animal) {
            case 1:
                var nome = leitor.question("Qual o nome do animal: ");
                var animal_1 = new Animal(nome);
                this.animals.push(animal_1);
                console.log("O ".concat(nome, " foi cadastrado no nosso sistema com sucesso! \n"));
                break;
            case 2:
                var nomeDog = leitor.question("Qual o nome do cachorro: ");
                var cachorro = new Dog(nomeDog);
                this.dogs.push(cachorro);
                console.log("O ".concat(nomeDog, " foi cadastrado no nosso sistema com sucesso! \n"));
                break;
            case 3:
                var nomeCat = leitor.question("Qual o nome do cachorro: ");
                var gato = new Cat(nomeCat);
                this.cats.push(gato);
                console.log("O ".concat(nomeCat, " foi cadastrado no nosso sistema com sucesso! \n"));
                break;
            default:
                console.log("Essa op\u00E7\u00E3o n\u00E3o existe :/");
                break;
        }
    };
    SistemaDeAnimais.prototype.interagirAnimais = function () {
        this.animals.forEach(function (a) {
            a.emitirSom();
        });
        this.dogs.forEach(function (d) {
            d.emitirSom();
        });
        this.cats.forEach(function (c) {
            c.emitirSom();
        });
    };
    SistemaDeAnimais.prototype.removerAnimais = function () {
        console.log("1 - Animal sem identifica\u00E7\u00E3o de esp\u00E9cie");
        console.log("2 - Cachorro");
        console.log("3 - Gato");
        var animal = leitor.questionInt("Informe o numero referente ao animal que deseja remover: ");
        switch (animal) {
            case 1:
                console.log("Animais na nossa base de dados: ");
                this.animals.forEach(function (a) {
                    console.log(a.name);
                });
                var nome_1 = leitor.question("Qual o nome do animal: ");
                var animalIndex = this.animals.findIndex(function (a) { return a.name === nome_1; });
                if (animalIndex !== -1) {
                    console.log("Animal removido com sucesso!");
                    this.animals.splice(animalIndex, 1);
                }
                else {
                    console.log("Animal n\u00E3o encontrado na base de dados, tente novamente!");
                }
                break;
            case 2:
                console.log("Cachorros na nossa base de dados: ");
                this.dogs.forEach(function (d) {
                    console.log(d.name);
                });
                var nomeDog_1 = leitor.question("Qual o nome do cachorro: ");
                var dogIndex = this.dogs.findIndex(function (d) { return d.name === nomeDog_1; });
                if (dogIndex !== -1) {
                    console.log("Cachorro removido com sucesso!");
                    this.dogs.splice(dogIndex, 1);
                }
                else {
                    console.log("Cachorro n\u00E3o encontrado na base de dados, tente novamente!");
                }
                break;
            case 3:
                console.log("Gatos na nossa base de dados: ");
                this.cats.forEach(function (c) {
                    console.log(c.name);
                });
                var nomeCat_1 = leitor.question("Qual o nome do gato: ");
                var catIndex = this.cats.findIndex(function (c) { return c.name === nomeCat_1; });
                if (catIndex !== -1) {
                    console.log("Gato removido com sucesso!");
                    delete this.cats[catIndex];
                }
                else {
                    console.log("Gato n\u00E3o encontrado na base de dados, tente novamente!");
                }
                break;
            default:
                console.log("Op\u00E7\u00E3o inexistente, tente novamente!");
                break;
        }
    };
    SistemaDeAnimais.prototype.listarAnimais = function () {
        this.animals.forEach(function (a) {
            console.log("Nome: ".concat(a.name, " (Animal sem esp\u00E9cie)"));
        });
        this.dogs.forEach(function (d) {
            console.log("Nome ".concat(d.name, " (Cachorro)"));
        });
        this.cats.forEach(function (c) {
            console.log("Nome ".concat(c.name, " (Gato)"));
        });
    };
    return SistemaDeAnimais;
}());
exports.SistemaDeAnimais = SistemaDeAnimais;