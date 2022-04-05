package br.com.stefanini.developerup.livro.dto;

import java.util.Collection;

public class LivrosDto {
    
    private String nome;
    
    private String autor;
    
    private String anoPublicado;

    private String editora;

    private String isbn;
    
    private String quantexemplares;
   
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getAnoPublicado() {
        return anoPublicado;
    }

    public void setAnoPublicado(String anoPublicado) {
        this.anoPublicado = anoPublicado;
    }

    public String getEditora() {
        return editora;
    }

    public void setEditora(String editora) {
        this.editora = editora;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getQuantexemplares() {
        return quantexemplares;
    }

    public void setQuantexemplares(String quantexemplares) {
        this.quantexemplares = quantexemplares;
    }

    public Collection<LivrosDto> listar() {
        return null;
    }

}
