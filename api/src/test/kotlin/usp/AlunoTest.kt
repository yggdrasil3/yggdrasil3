package usp

import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlin.test.*
import usp.plugins.*
import usp.models.Aluno

class AlunoTest {
    @Test
    fun testAlunoRoutes() = testApplication {
        application {
            configureRouting()
        }

        // Test GET all Alunos when empty
        client.get("/aluno").apply {
            assertEquals(HttpStatusCode.NotFound, status)
            assertEquals("No Alunos", bodyAsText())
        }

        // Test POST new Aluno
        val newAluno = Aluno("123456", "senha123")
        client.post("/aluno") {
            contentType(ContentType.Application.Json)
            setBody(newAluno)
        }.apply {
            assertEquals(HttpStatusCode.OK, status)
            assertEquals("Aluno criado com sucesso.", bodyAsText())
        }

        // Test GET all Alunos after adding one
        client.get("/aluno").apply {
            assertEquals(HttpStatusCode.OK, status)
            assertNotNull(bodyAsText())
        }

        // Test GET Aluno by nusp
        client.get("/aluno/123456").apply {
            assertEquals(HttpStatusCode.OK, status)
        }

        // Test GET Aluno with invalid nusp
        client.get("/aluno/999999").apply {
            assertEquals(HttpStatusCode.NotFound, status)
            assertEquals("No Alunos", bodyAsText())
        }

        // Test DELETE Aluno
        client.delete("/aluno/123456").apply {
            assertEquals(HttpStatusCode.Accepted, status)
            assertEquals("Aluno removido com sucesso.", bodyAsText())
        }

        // Test DELETE Aluno with invalid nusp
        client.delete("/aluno/999999").apply {
            assertEquals(HttpStatusCode.NotFound, status)
            assertEquals("Aluno não encontrado.", bodyAsText())
        }
    }
}
