package br.com.stefanini.developerup.livro.rest;

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

import br.com.stefanini.developerup.livro.dto.LivrosDto;
import br.com.stefanini.developerup.livro.model.Livros;
import br.com.stefanini.developerup.livro.service.LivroService;


@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/livro")
@RequestScoped
public class LivrosRest {
    @Inject
    LivroService service;

    @GET
    @Operation(summary = "Listar", description = "Retorna uma lista de Livros")
    @APIResponse(responseCode = "200", description = "LivrosDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = LivrosDto.class))})
    public Response listar()  {
        return Response.status(Response.Status.OK).entity(service.listar()).build();
    }
    
    @POST
    @Operation(summary = "Criar", description = "Criar um Livro")
    @APIResponse(responseCode = "201", description = "LivrosDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = LivrosDto.class))})
    public Response saveLivro(LivrosDto dto){
        Livros livros = service.saveLivro(dto);
        
        return Response.created(URI.create("/livro/" + livros.getId())).build();
    }

    @PUT
    @Operation(summary = "Atualizar", description = "Atualizar um Livro")
    @APIResponse(responseCode = "204", description = "LivrosDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = LivrosDto.class))})
    @Path("{id}")
    public Response updateLivro(@PathParam("id") Long id, LivrosDto dto){
        service.updateLivro(id, dto);

        return Response.status(204).build();    
    }
    @DELETE
    @Operation(summary = "Remover", description = "Remover um Livro")
    @APIResponse(responseCode = "204", description = "LivrosDto",
            content = {@Content(mediaType = "application/json",
                    schema = @Schema(implementation = LivrosDto.class))})
    @Path("{id}")
    public Response removeLivro(@PathParam("id") Long id, LivrosDto dto){
        service.removeLivro(id);

        return Response.status(204).build();
    }
}
