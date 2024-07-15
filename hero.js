// Criando a classe Hero e o método atacar
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'suas habilidades';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Exemplo de uso:
const meuHeroi = new Hero('Aragorn', 35, 'guerreiro');
meuHeroi.atacar();
