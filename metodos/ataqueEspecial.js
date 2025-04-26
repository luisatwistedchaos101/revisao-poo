function ataqueEspecial(alvo) {
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
