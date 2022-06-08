import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardGrande/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://github.com/paulogm15.png" 
          nome="Paulo G M Santos" 
          descricao="Oi, eu sou o Paulo. Sou aluno na turma Freire da Labenu. Adoro video games e sair com os amigos no fim de semana pra relaxar a mente do estesse do dia a dia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1654645034~hmac=45787f9f7ce522e0d4913dcecb542776" 
          texto="Ver mais"
        />
        <CardPequeno
          imagem="https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-512.png"
          texto=" Email: paulogmendes.15@gmail.com"
         />
        <CardPequeno
          imagem="https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/localization-512.png"
          texto="Endereço: SHVP RUA 6 CHACARA 259 CASA 24, VICENTE PIRES, BRASILIA-DF"
         />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E0BAQEiwnAoh190lQ/company-logo_200_200/0/1572907278647?e=1662595200&v=beta&t=zQVD7y3-cNrytPAU9_amp3yUVE5SzmlYORKviMfjNPo" 
          nome="Simplifica" 
          descricao="Professor particular de Matemática e Física." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Participei do Projeto Kuaray da UnB em Parceria com o clube de astronomia de Brasília em 2017. Segue o link para o video em 360° do eclipse solar de 21 agosto de 2017."
          link="https://www.youtube.com/watch?v=jPgPIIg3CUs"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a target='_blank' href='https://www.facebook.com/osolubak/'><ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        /></a>
        
        <a target='_blank' href='https://twitter.com/paulogm_'><ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /></a>

              
      </div>
    </div>
  );
}

export default App;
