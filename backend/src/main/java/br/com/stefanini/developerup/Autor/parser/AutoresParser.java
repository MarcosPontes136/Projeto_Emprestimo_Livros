package br.com.stefanini.developerup.Autor.parser;

import br.com.stefanini.developerup.Autor.dto.AutoresDto;
import br.com.stefanini.developerup.Autor.model.Autores;

public class AutoresParser {
    public static AutoresParser get(){
        return  new AutoresParser();
    }

    public AutoresDto dto(Autores entidade) {

        AutoresDto dto = new AutoresDto();
        
        dto.setNome(entidade.getNome());
        dto.setIsni(entidade.getIsni());
        dto.setEmail(entidade.getEmail());
        dto.setDataDeNascimento(entidade.getDataDeNascimento());
        dto.setBiografia(entidade.getBiografia());
        return dto;
    }
    
    public Autores saveCliente(AutoresDto dto) {
        Autores autores = new Autores();

        autores.setNome(dto.getNome());
        autores.setIsni(dto.getIsni());
        autores.setEmail(dto.getEmail());
        autores.setDataDeNascimento(dto.getDataDeNascimento());
        autores.setBiografia(dto.getBiografia());
        autores.persist();

        return autores;
    }
}
