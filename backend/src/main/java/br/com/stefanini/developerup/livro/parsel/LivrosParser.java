package br.com.stefanini.developerup.livro.parsel;

import br.com.stefanini.developerup.livro.dto.LivrosDto;
import br.com.stefanini.developerup.livro.model.Livros;

public class LivrosParser {
    public static LivrosParser get(){
        return  new LivrosParser();
    }

    public LivrosDto dto(Livros entidade){
        LivrosDto dto = new LivrosDto();

        dto.setNome(entidade.getNome());
        dto.setAutor(entidade.getAutor());
        dto.setAnoPublicado(entidade.getAnoPublicado());
        dto.setEditora(entidade.getEditora());
        dto.setIsbn(entidade.getIsbn());
        dto.setQuantexemplares(entidade.getQuantexemplares());
        return dto;
    }
    public Livros saveCliente(LivrosDto dto){
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
}