package br.com.stefanini.developerup.livro.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.ws.rs.core.Response;

import br.com.stefanini.developerup.livro.dto.LivrosDto;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "livros")
public class Livros extends PanacheEntityBase{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;
    
    @Column(name = "autor")
    private String autor;
    
    @Column(name = "anoPublicado")
    private String anoPublicado;

    @Column(name = "editora")
    private String editora;

    @Column(name = "isbn")
    private String isbn;
    
    @Column(name = "quantexemplares")
    private String quantexemplares;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public static Response ok(LivrosDto livrosDto) {
        return null;
    }
}
