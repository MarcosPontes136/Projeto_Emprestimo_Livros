package br.com.stefanini.developerup.livro.service;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import br.com.stefanini.developerup.livro.dao.LivrosDao;
import br.com.stefanini.developerup.livro.dto.LivrosDto;
import br.com.stefanini.developerup.livro.model.Livros;
import br.com.stefanini.developerup.livro.parsel.LivrosParser;

@RequestScoped
public class LivroService {

    @Inject
    LivrosDao dao;
    
    public List<LivrosDto> listar(){
        return dao.listar().stream().map(LivrosParser.get()::dto).collect(Collectors.toList());
    }

        @Transactional
        public Livros saveLivro(LivrosDto dto){
            Livros livros = new Livros();

            livros.setNome(dto.getNome());
            livros.setAutor(dto.getAutor());
            livros.setAnoPublicado(dto.getAnoPublicado());
            livros.setEditora(dto.getEditora());
            livros.setIsbn(dto.getIsbn());
            livros.setQuantexemplares(dto.getQuantexemplares());
            livros.persist();

            return livros;
        }  

        @Transactional
        public void updateLivro(Long id, LivrosDto dto){
            Livros livros = new Livros();
    
            Optional<Livros> livrosOp = Livros.findByIdOptional(id);
            
            if(livrosOp.isEmpty()){
                throw new NullPointerException("Livro not found");
            }

            livros = livrosOp.get();
            livros.setNome(dto.getNome());
            livros.setAutor(dto.getAutor());
            livros.setAnoPublicado(dto.getAnoPublicado());
            livros.setEditora(dto.getEditora());
            livros.setIsbn(dto.getIsbn());
            livros.setQuantexemplares(dto.getQuantexemplares());
            livros.persist();
        }
        @Transactional
        public void removeLivro(Long id){
            Optional<Livros> livrosOp = Livros.findByIdOptional(id);

            if(livrosOp.isEmpty()){
                throw new NullPointerException("Livro not found");
            }

            Livros livros = livrosOp.get();
            livros.delete();
        }
}
