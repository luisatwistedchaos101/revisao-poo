# Tutorial: Criando o RPG Simples com POO em JavaScript

## Passo 1: Entendendo o Objetivo
Você vai criar um RPG básico utilizando conceitos de **orientação a objetos**. A ideia é ter diferentes **classes de personagens** com propriedades como **vitalidade, força, inteligência e destreza** e que possam **atacar fisicamente** ou com **habilidades mágicas**. O objetivo é entender como criar uma classe, instanciá-la e adicionar métodos que definem o comportamento dos personagens.

---

## Passo 2: Criando a Classe `Personagem`
1. **O que é uma classe?**  
   Uma classe é um **modelo** que define as **propriedades e comportamentos** de um objeto. Você vai criar uma classe chamada `Personagem`, que terá as seguintes propriedades:
   - **nome**: nome do personagem.
   - **vitalidade**: a quantidade de vida do personagem.
   - **força**: o poder de ataque físico do personagem.
   - **inteligência**: a habilidade de ataque mágico do personagem.
   - **destreza**: a habilidade de agir rapidamente (ajuda em ataques físicos e mágicos).

2. **Propriedades da Classe**:
   - O nome do personagem será passado como parâmetro na criação do personagem.
   - A `vitalidade` será um número que representa a vida inicial do personagem.
   - `força`, `inteligência` e `destreza` também serão números, que influenciam nos tipos de ataque (físico e mágico).

3. **Métodos Básicos**:
   - `ataqueFisico(alvo)`: esse método deve diminuir a **vitalidade** do alvo com base na **força** do personagem.
   - `ataqueMagico(alvo)`: esse método deve diminuir a **vitalidade** do alvo com base na **inteligência** do personagem.
   - `estaVivo()`: esse método retorna `true` se o personagem estiver vivo (ou seja, se a **vitalidade** for maior que 0), caso contrário retorna `false`.

---

## Passo 3: Criando Personagens com Diferentes Classes
Agora, crie diferentes instâncias de personagens. Cada um deles deve ter as propriedades e métodos definidos na classe `Personagem`, mas com valores específicos que correspondem à sua classe.

Por exemplo:
- Um **Guerreiro** pode ter muita força e vitalidade, mas pouca inteligência.
- Um **Mago** pode ter muita inteligência e uma vitalidade mais baixa.

A ideia é que, ao criar um personagem, você possa personalizar os valores de **força, inteligência, destreza** e **vitalidade** de acordo com o tipo de personagem.

---

## Passo 4: Combatendo Entre Personagens
Agora que você tem personagens com propriedades e métodos básicos, crie uma lógica simples para os personagens se enfrentarem. Um personagem pode atacar o outro utilizando os métodos de **ataque físico** ou **ataque mágico**, dependendo de sua estratégia.

#### Como a batalha funciona:
- Cada personagem escolhe qual tipo de ataque usar: **ataque físico** ou **ataque mágico**.
- O **ataque físico** utiliza a **força** do personagem para causar dano.
- O **ataque mágico** utiliza a **inteligência** para causar dano.
- Após cada ataque, o personagem **alvo** perde **vitalidade**.

Quando a **vitalidade** de um personagem chega a **0**, ele perde a batalha.

---

## Passo 5: Melhorando a Lógica do Combate (Opcional)
1. **Vantagens e Desvantagens entre as Classes**: 
   Adicione uma lógica simples onde um tipo de personagem tem **vantagem** ou **desvantagem** ao atacar outro. Por exemplo, um **Guerreiro** pode ser mais forte contra um **Bárbaro**, mas mais fraco contra um **Mago**.
2. **Turnos de Batalha**: Crie uma sequência onde os personagens alternam entre **atacar fisicamente** ou **mágico** a cada turno.
3. **Mais Ações**: Adicione novas habilidades ou ações, como **cura** ou **buffs** (aumentar força ou inteligência temporariamente).

---

## Passo 6: Exibindo o Resultado
Uma vez que o combate termina, você pode criar uma função que exibe o resultado da batalha:
- Exibe a **vitalidade** restante de cada personagem após o ataque.
- Exibe qual personagem venceu e qual perdeu.

---

## Passo 7: Aprendendo Com o Processo
- **Criar classes** e instanciá-las.
- **Usar métodos** para definir comportamentos dos objetos.
- **Entender e aplicar** propriedades que representam os atributos dos personagens.
- **Fazer uso da lógica de comparação** de valores para definir vantagens e desvantagens.
- **Refinar a lógica de combate**, adicionando mais características e complexidade ao jogo.

---

## Passo 8: Continuando a Evolução do Jogo (Opcional)
- **Herança**: Criar classes específicas (como `Guerreiro`, `Mago`, etc.) que herdam de `Personagem`.
- **Interface gráfica**: Usar HTML e CSS para criar uma interface onde os usuarios possam **escolher** e **visualizar** os resultados das batalhas de forma interativa.

---

## Conclusão
Este projeto simples os ajuda a entenderem os conceitos básicos de **orientação a objetos**, como **criação de classes**, **atributos e métodos**, e **instanciação de objetos**. À medida que o conhecimento cresce, você pode expandir o jogo para torná-lo mais interessante e desafiador!
