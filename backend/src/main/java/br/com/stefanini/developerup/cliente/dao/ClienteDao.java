package br.com.stefanini.developerup.cliente.dao;

import io.quarkus.panache.common.Sort;
import javax.enterprise.context.RequestScoped;
import br.com.stefanini.developerup.cliente.model.Cliente;

import java.util.List;

/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
@RequestScoped
public class ClienteDao {
    public List<Cliente> listar(){
        return Cliente.listAll(Sort.by("nome,email,contato").ascending());
    }

}
