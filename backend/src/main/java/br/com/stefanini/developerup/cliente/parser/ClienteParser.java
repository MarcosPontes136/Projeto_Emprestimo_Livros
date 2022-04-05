package br.com.stefanini.developerup.cliente.parser;

import br.com.stefanini.developerup.cliente.dto.ClienteDto;
import br.com.stefanini.developerup.cliente.model.Cliente;

/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
public class ClienteParser {
    public static ClienteParser get(){
        return  new ClienteParser();
    }

    public ClienteDto dto(Cliente entidade){
        ClienteDto dto = new ClienteDto();

        dto.setEmail(entidade.getEmail());
        dto.setNome(entidade.getNome());
        dto.setContato(entidade.getContato());
        return dto;
    }
    
    public Cliente saveCliente(ClienteDto dto){
        Cliente cliente = new Cliente();

        cliente.setEmail(dto.getEmail());
        cliente.setNome(dto.getNome());
        cliente.setContato(dto.getContato());
        cliente.persist();

        return cliente;
    }
}
