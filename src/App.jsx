
import './App.css'
import { useState, useEffect } from 'react'
import { Galery } from './components/Galery'
import { SearchInput } from './components/SearchInput'


function App() {

  const language = 'pt-br';
  const apiKey = "vx8kSayHnrzd4Cg1NXgYenVHyOhPiPF4PSx8x8YJur1tnyvqyEH3iVgO";
  const [ search, setSearch ] = useState();
  const [ media, setMedia ] = useState([]);
  const [ titleGalery, setTitleGalery ] = useState()

  useEffect(() => { requestFeaturedCollections() }, []);


  function changeSearch({ target }) {
    setSearch(target.value)
  }


  function submit(e) {
    e.preventDefault();

    if (search === '' || search[0] === '#') {
      return;
    }

    let removingSpaces = search.trim().replace(/( )+/g, " ");
    setSearch(removingSpaces);

    requestSearch(search);

    if (e.target.className.includes('span')) {
      e.target.parentNode.querySelector('input').value = '';

    } else {
      e.target.querySelector('input').value = '';
    }
  }


  async function requestFeaturedCollections () {

      const response = await fetch("https://api.pexels.com/v1/collections/featured?per_page=1", {
          "method": "GET",
          "headers": {
              Accept: "aplication/json",
              Authorization : apiKey
          },
      });

      const data = await response.json();
      const id = data.collections[0].id;

      requestCollection(id);
  }


  async function requestCollection ( collection_id ) {

      const response = await fetch(`https://api.pexels.com/v1/collections/${collection_id}?type=photos&per_page=20`, {
          "method": "GET",
          "headers": {
              Accept: "aplication/json",
              Authorization : apiKey
          },
      })

      const data = await response.json()
      setMedia(Object.values(data.media))
      setTitleGalery("Coleção em Destaque")
  }


  async function requestSearch() {

      const response = await fetch(`https://api.pexels.com/v1/search?query=${search}&orientation=portstrait&locale=${language}`, {
          "method": "GET",
          "headers": {
              Accept: "aplication/json",
              Authorization : apiKey
          },
      });


      const data = await response.json();

      if (data.total_results != 0) {
        setMedia(data.photos);
        setTitleGalery(search)

      } else {
        setMedia([]);
        setTitleGalery("Not found")
      }
  }


  return (
    <div className="App">
      <h1>Pesquisar imagem no Pexels</h1>
      <SearchInput handleChange={changeSearch} submit={submit} value={search}/>
      <Galery media={media} title={titleGalery} />
    </div>
  )
}

export default App
