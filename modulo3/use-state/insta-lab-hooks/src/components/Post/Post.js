import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [like, setLike] = useState(false)

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)

  const [mandarComentario, setMandarComentario] = useState(false)

  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const [todosComentarios, setTodosComentarios] = useState([])
  
  const onClickCurtida = () => {
    if (like) {
      setLike(false)
      setNumeroCurtidas(0)
    }
    else {
      setLike(true)
      setNumeroCurtidas(1)
    }
  };

  const onClickComentario = () => {
    setMandarComentario(!mandarComentario)
  };

  const enviarComentario = (comentario) => {
    setNumeroComentarios(numeroComentarios + 1)
    const novaListaDeComentarios = [...todosComentarios, comentario]
    setMandarComentario(false)
    setTodosComentarios(novaListaDeComentarios)
  }

  const iconeCurtida = like ? iconeCoracaoPreto : iconeCoracaoBranco

  const commentSection = mandarComentario ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    todosComentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    }
    )
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {commentSection}
    </PostContainer>
  )
}

export default Post