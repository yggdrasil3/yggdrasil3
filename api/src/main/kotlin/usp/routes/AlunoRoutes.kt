package usp.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import usp.models.Aluno
import usp.models.alunos

fun Route.alunoRoutes() {
    route("/aluno") {
        get {
            if(alunos.isNotEmpty()) {
                call.respond(alunos)
            }
            else {
                call.respondText("No Alunos", status = HttpStatusCode.NotFound)
            }
        }

        get("/{id}") {
            val id = call.parameters["id"] ?: return@get call.respondText("Missing or malformed id", status = HttpStatusCode.BadRequest)
            val aluno = alunos.find { it.id == id } ?: return@get call.respondText("No Alunos", status = HttpStatusCode.NotFound)

            call.respond(aluno)
        }

        post {
            val aluno = call.receive<Aluno>()
            alunos.add(aluno)
            call.respond("Aluno criado com sucesso.")
        }

        delete("/{id}") {
            val id = call.parameters["id"] ?: return@delete call.respondText("Invalid request", status = HttpStatusCode.BadRequest)

            if (alunos.removeIf { it.id == id }) {
                call.respondText("Aluno removido com sucesso.", status = HttpStatusCode.Accepted)
            }
            else call.respondText("Aluno não encontrado.", status = HttpStatusCode.NotFound)
        }
    }
}