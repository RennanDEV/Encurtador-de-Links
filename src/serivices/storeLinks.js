// Buscar os links salvos.
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no localStorage.
export async function saveLink(key, newLink){
  let linkStored = await getLinksSave(key);

  // Se já tiver um link salvo com algum ID eu não vou deixar duplicar
  const haslink = linkStored.some( link => link.id === newLink.id)

  if(haslink){
    console.logo('ESSE LINK JÀ EXISTE NA SUA LISTA!')
    return;
  }

  //Adicionar esse novo link na lista..
  linkStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linkStored))
  console.log('LINK SALVO COM SUCESSO!')
}

// Deletar algum link salvo.
export function deleteLink(Links, id){
  let myLinks = Links.filter( item => {
    return (item.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
  console.log("LINK DELETADO COM SUCESSO!")

  return myLinks;
}