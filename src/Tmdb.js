const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b'; //chave api
const API_BASE = 'https://api.themoviedb.org/3'; // link do site que armazena a api

/*
- originais dos concursos 
- recomendados(matérias em destaques)( trending)
- em alta (top rated)
- material de estudo 1
- material de estudo 2
- material de estudo 3
- material de estudo 4
- material de estudo 5
*/

const basicFetch = async (endpoint) => {
    const req = await fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
}
export default {
    getHomeList: async () =>{
        return[
            {
                slug:  ' originais dos concursos',
                titulo:'Direito administrativo',
                itens: []
            },
            {
                slug:  ' trending',
                titulo:'Direito administrativo recomendado para.....',
                itens: [] 
            },
            {
                slug:  ' toprated',
                titulo:'Em alta',
                itens: [] 
            },
            {
                slug:  ' trending',
                titulo:'Direito administrativo recomendado para.....',
                itens: [] 
            },
            {
                slug:  'material de estudo 1',
                titulo:'Direito administrativo',
                itens: [] 
            },
            {
                slug:  'material de estudo 2',
                titulo:'Direito Constitucional',
                itens: [] 
            },           
            {
                slug:  'material de estudo 3',
                titulo:'Direito Tributario',
                itens: [] 
            },
            {
                slug:  'material de estudo 4',
                titulo:'Direito Civil',
                itens: [] 
            },
            {
                slug:  'material de estudo 5',
                titulo:'Contabilidade Publica',
                itens: [] 
            },
        ];
    }
}