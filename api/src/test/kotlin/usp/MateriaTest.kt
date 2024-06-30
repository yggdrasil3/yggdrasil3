package usp

import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlin.test.*
import usp.plugins.*
import usp.models.Materia

class MateriaTest {
    @Test
    fun testMateriaRoutes() = testApplication {
        application {
            configureSerialization()
            configureDatabases()
            configureRouting()
        }
        
        // Test GET all Materias
        client.get("/materia").apply {
            assertEquals(HttpStatusCode.OK, status)
        }

        // Test POST new Materia
        val newMateria = Materia("MAC0110", "mandatory", 4, 2, "Introdução à Computação")
        client.post("/materia") {
            contentType(ContentType.Application.Json)
            setBody(newMateria)
        }.apply {
            assertEquals(HttpStatusCode.Created, status)
        }
        
        // Test GET Materia by code
        client.get("/materia/MAC0110").apply {
            assertEquals(HttpStatusCode.OK, status)
        }

        // Test GET Materia with invalid code
        client.get("/materia/INVALID").apply {
            assertEquals(HttpStatusCode.NotFound, status)
        }
    }
}
