package br.com.stefanini.developerup.Autor.rest;

import java.net.URI;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.Autor.dto.AutoresDto;
import br.com.stefanini.developerup.Autor.model.Autores;
import br.com.stefanini.developerup.Autor.service.AutorService;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/autor")
@RequestScoped
public class AutoresRest {
    @Inject
    AutorService service;

    @GET
    @Operation(summary = "Listar", description = "Retorna uma lista de Autores")
    @APIResponse(responseCode = "200", description = "AutoresDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = AutoresDto.class))})
    public Response listar()  {
        return Response.status(Response.Status.OK).entity(service.listar()).build();
    }
    
    @POST
    @Operation(summary = "Criar", description = "Criar um Autor")
    @APIResponse(responseCode = "201", description = "AutoresDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = AutoresDto.class))})
    public Response saveAutor(AutoresDto dto){
        Autores autores = service.saveCliente(dto);
        
        return Response.created(URI.create("/autor/" + autores.getId())).build();
    }

    @PUT
    @Operation(summary = "Atualizar", description = "Atualizar um Autor")
    @APIResponse(responseCode = "204", description = "AutoresDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = AutoresDto.class))})
    @Path("{id}")
    public Response updateAutor(@PathParam("id") Long id, AutoresDto dto){
        service.updateAutor(id, dto);

        return Response.status(204).build();    
    }
    @DELETE
    @Operation(summary = "Remover", description = "Remover um Autor")
    @APIResponse(responseCode = "204", description = "ClienteDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = AutoresDto.class))})
    @Path("{id}")
    public Response removeAutor(@PathParam("id") Long id, AutoresDto dto){
        service.removeAutor(id);

        return Response.status(204).build();
    }
}
