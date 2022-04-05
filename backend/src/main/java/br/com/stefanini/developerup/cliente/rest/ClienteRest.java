package br.com.stefanini.developerup.cliente.rest;



import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.cliente.dto.ClienteDto;
import br.com.stefanini.developerup.cliente.model.Cliente;
import br.com.stefanini.developerup.cliente.service.ClienteService;

import java.net.URI;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/cliente")
@RequestScoped

public class ClienteRest {
    @Inject
    ClienteService service;

    @GET
    @Operation(summary = "Listar", description = "Retorna uma lista de Clientes")
    @APIResponse(responseCode = "200", description = "ClienteDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ClienteDto.class))})
    public Response listar()  {
        return Response.status(Response.Status.OK).entity(service.listar()).build();
    }

    @POST
    @Operation(summary = "Criar", description = "Criar um Cliente")
    @APIResponse(responseCode = "201", description = "ClienteDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ClienteDto.class))})
    public Response saveCliente(ClienteDto dto){
        Cliente cliente = service.saveCliente(dto);
        
        return Response.created(URI.create("/cliente/" + cliente.getId())).build();
    }

    @PUT
    @Operation(summary = "Atualizar", description = "Atualizar um Cliente")
    @APIResponse(responseCode = "204", description = "ClienteDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ClienteDto.class))})
    @Path("{id}")
    public Response updateCliente(@PathParam("id") Long id, ClienteDto dto){
        service.updateCliente(id, dto);

        return Response.status(204).build();    
    }

    @DELETE
    @Operation(summary = "Remover", description = "Remover um Cliente")
    @APIResponse(responseCode = "204", description = "ClienteDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = ClienteDto.class))})
    @Path("{id}")
    public Response removeCliente(@PathParam("id") Long id, ClienteDto dto){
        service.removeCliente(id);

        return Response.status(204).build();
    }

}
