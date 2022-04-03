package br.com.stefanini.developerup.service;



import br.com.stefanini.developerup.dao.ClienteDao;
import br.com.stefanini.developerup.dto.ClienteDto;
import br.com.stefanini.developerup.model.Cliente;
import br.com.stefanini.developerup.parser.ClienteParser;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
@RequestScoped
public class ClienteService {
    @Inject
    ClienteDao dao;

    public List<ClienteDto> listar(){
        return dao.listar().stream().map(ClienteParser.get()::dto).collect(Collectors.toList());
    }

        @Transactional
        public Cliente saveCliente(ClienteDto dto){
            Cliente cliente = new Cliente();

            cliente.setEmail(dto.getEmail());
            cliente.setNome(dto.getNome());
            cliente.setContato(dto.getContato());
            cliente.persist();

            return cliente;
        }  

        @Transactional
        public void updateCliente(Long id, ClienteDto dto){
            Cliente cliente = new Cliente();
    
            Optional<Cliente> clienteOp = Cliente.findByIdOptional(id);
            
            if(clienteOp.isEmpty()){
                throw new NullPointerException("Cliente not found");
            }

            cliente = clienteOp.get();
            cliente.setEmail(dto.getEmail());
            cliente.setNome(dto.getNome());
            cliente.setContato(dto.getContato());
            cliente.persist();

        }
        @Transactional
        public void removeCliente(Long id){
            Optional<Cliente> clienteOp = Cliente.findByIdOptional(id);

            if(clienteOp.isEmpty()){
                throw new NullPointerException("Cliente not found");
            }

            Cliente cliente = clienteOp.get();
            cliente.delete();
        }
}
