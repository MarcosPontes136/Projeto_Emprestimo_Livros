package br.com.stefanini.developerup.Autor.dao;

import io.quarkus.panache.common.Sort;
import javax.enterprise.context.RequestScoped;

import br.com.stefanini.developerup.Autor.model.Autores;

import java.util.List;

@RequestScoped
public class AutoresDao {
    public List<Autores> listar(){
        return Autores.listAll(Sort.by("nome,isni,email,dataDeNascimento,biografia").ascending());
    }
}
