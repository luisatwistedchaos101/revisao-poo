function ataqueFisico(alvo) {
  const dano = this.forca;
  alvo.vitalidade -= dano;
  console.log(`${this.nome} atacou fisicamente ${alvo.nome} causando ${dano} de dano.`);
}