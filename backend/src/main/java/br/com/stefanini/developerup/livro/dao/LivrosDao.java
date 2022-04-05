package br.com.stefanini.developerup.livro.dao;

import io.quarkus.panache.common.Sort;
import javax.enterprise.context.RequestScoped;

import br.com.stefanini.developerup.livro.model.Livros;

import java.util.List;
@RequestScoped
public class LivrosDao {
    public List<Livros> listar(){
        return Livros.listAll(Sort.by("nome,autor,anoPublicado,editora,isbn,quantexemplares").ascending());
    }
}
