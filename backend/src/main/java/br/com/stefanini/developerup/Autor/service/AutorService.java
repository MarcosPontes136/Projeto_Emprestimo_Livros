package br.com.stefanini.developerup.Autor.service;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.Autor.dao.AutoresDao;
import br.com.stefanini.developerup.Autor.dto.AutoresDto;
import br.com.stefanini.developerup.Autor.model.Autores;
import br.com.stefanini.developerup.Autor.parser.AutoresParser;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestScoped
public class AutorService {

    @Inject
    AutoresDao dao;
    
    public List<AutoresDto> listar(){
        return dao.listar().stream().map(AutoresParser.get()::dto).collect(Collectors.toList());
    }

        @Transactional
        public Autores saveAutor(AutoresDto dto){
            Autores autores = new Autores();

            autores.setNome(dto.getNome());
            autores.setIsni(dto.getIsni());
            autores.setEmail(dto.getEmail());
            autores.setDataDeNascimento(dto.getDataDeNascimento());
            autores.setBiografia(dto.getBiografia());
            autores.persist();

            return autores;
        }  

        @Transactional
        public void updateAutor(Long id, AutoresDto dto){
            Autores autores = new Autores();
    
            Optional<Autores> autoresOp = Autores.findByIdOptional(id);
            
            if(autoresOp.isEmpty()){
                throw new NullPointerException("Autor not found");
            }

            autores = autoresOp.get();
            autores.setNome(dto.getNome());
            autores.setIsni(dto.getIsni());
            autores.setEmail(dto.getEmail());
            autores.setDataDeNascimento(dto.getDataDeNascimento());
            autores.setBiografia(dto.getBiografia());
            autores.persist();

        }
        @Transactional
        public void removeAutor(Long id){
            Optional<Autores> autoresOp = Autores.findByIdOptional(id);

            if(autoresOp.isEmpty()){
                throw new NullPointerException("Autor not found");
            }

            Autores autores = autoresOp.get();
            autores.delete();
        }
}
