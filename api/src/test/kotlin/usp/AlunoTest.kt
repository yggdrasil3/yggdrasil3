package usp

import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.testing.*
import kotlin.test.*
import usp.plugins.*

class AlunoTest {
    @Test
    fun testAluno() = testApplication {
        application {
            configureRouting()
        }

        client.get("/aluno").apply {
            assertEquals(HttpStatusCode.NotFound, status)
            assertEquals("No Alunos", bodyAsText())
        }
    }
}
