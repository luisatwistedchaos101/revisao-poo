class Personagem {
    constructor(nome, classe, forca, inteligencia, destreza){
        this.nome = nome;
        this.classe = classe;
        this.vitalidade = 20;

if (forca + inteligencia + destreza > 10){
    throw new Error("A distribuição de pontos é no máximo 10");
}
// Verificar se a classe escolhida está nas regras do jogo 
        
        this.forca = forca;
        this.inteligencia = inteligencia;
        this.destreza = destreza;
}

verCaracteristicas() {
console.log("Nome do personagem é", this.nome);
console.log("Sua classe é", this.classe);
console.log("Vitalidade:", this.vitalidade);
console.log("Forca:", this.forca);
console.log("Inteligência:", this.inteligencia);
console.log("Destreza:", this.destreza);
    }
    estaVivo() {

        return this.vitalidade > 0
      }
      ataqueFisico(alvo) {
       if (this.estaVivo()){
        return;
       }
      }
      ataqueEspecial(alvo) {

        if (this.estaVivo()){
            return;
           }

        let dano = 0;
        switch (this.classe) {
          case "Guerreiro":
            dano = this.forca * 1.5;
            console.log(`${this.nome} usa Ataque Especial de Guerreiro!`);
            break;
          case "Mago":
            dano = this.inteligencia * 1.5;
            console.log(`${this.nome} usa Magia de Mago!`);
            break;
          case "Assassino":
            dano = this.destreza * 2;
            console.log(`${this.nome} usa Ataque Fatal de Assassino!`);
            break;
          case "Clérigo":
            dano = this.inteligencia * 1.2;
            console.log(`${this.nome} usa Cura de Clérigo!`);
            break;
          case "Arqueiro":
            dano = this.destreza * 1.5;
            console.log(`${this.nome} usa Flecha Mortal de Arqueiro!`);
            break;
          case "Bárbaro":
            dano = this.forca * 2;
            console.log(`${this.nome} usa Fúria de Bárbaro!`);
            break;
        }
        
        // Aplicar superioridade
        if (
          (this.classe === "Guerreiro" && alvo.classe === "Bárbaro") ||
          (this.classe === "Bárbaro" && alvo.classe === "Arqueiro") ||
          (this.classe === "Arqueiro" && alvo.classe === "Mago") ||
          (this.classe === "Mago" && alvo.classe === "Assassino") ||
          (this.classe === "Assassino" && alvo.classe === "Clérigo") ||
          (this.classe === "Clérigo" && alvo.classe === "Guerreiro")
        ) {
          dano *= 1.2; // +20% dano
          console.log(`${this.nome} tem vantagem sobre ${alvo.nome}! (+20% de dano)`);
        } else if (
          (this.classe === "Bárbaro" && alvo.classe === "Guerreiro") ||
          (this.classe === "Arqueiro" && alvo.classe === "Bárbaro") ||
          (this.classe === "Mago" && alvo.classe === "Arqueiro") ||
          (this.classe === "Assassino" && alvo.classe === "Mago") ||
          (this.classe === "Clérigo" && alvo.classe === "Assassino") ||
          (this.classe === "Guerreiro" && alvo.classe === "Clérigo")
        ) {
          dano *= 0.8; // -20% dano
          console.log(
            `${this.nome} tem desvantagem contra ${alvo.nome}! (-20% de dano)`
          );
        }
      
        alvo.vitalidade -= dano;
        console.log(`${this.nome} causou ${dano} de dano em ${alvo.nome}`);
      }
    }

    
const p1 = new Personagem("Humberto", "Guerreiro", 5, 2, 3);
const p2 = new Personagem("Pierre", "Clérigo", 3, 5, 3);

p1.verCaracteristicas();
p2.verCaracteristicas();

