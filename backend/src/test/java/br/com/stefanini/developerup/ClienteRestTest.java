package br.com.stefanini.developerup;
import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;


/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
@QuarkusTest
public class ClienteRestTest {
    private final static String URL = "/api/cliente";

    @Test
    public void testarListarBlocoIndicadorComSucesso(){
        given()
                .contentType(ContentType.JSON)
                .when()
                .get(URL)
                .then()
                .statusCode(200)
                .body(matchesJsonSchemaInClasspath("schemas/JsonSchemaLista.json"));
    }



}
