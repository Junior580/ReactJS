import React, { useState } from "react";
import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */


123
123
123


function App() {
  const projects = useState(['Desenvolvimento de app', 'Front-end web']);

  // useState retorna um array com 2 posições
  //
  // 1. Variavel com o seu valor inicial
  // 2. Função para atualizarmos o valor

  function handleAddProject() {
    projects.push(`Novo projeto ${Date.now()}`);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => (<li key={project}> {project}</li>))}
      </ul>

      <button type="button" onClick={handleAddProject} >Adicionar um projeto</button>
    </>
  );
}

export default App;