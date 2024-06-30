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

        get("/{nusp}") {
            val nusp = call.parameters["nusp"] ?: return@get call.respondText("Missing or malformed nusp", status = HttpStatusCode.BadRequest)
            val aluno = alunos.find { it.nusp == nusp } ?: return@get call.respondText("No Alunos", status = HttpStatusCode.NotFound)

            call.respond(aluno)
        }

        post {
            val aluno = call.receive<Aluno>()
            alunos.add(aluno)
            call.respond("Aluno criado com sucesso.")
        }

        delete("/{nusp}") {
            val nusp = call.parameters["nusp"] ?: return@delete call.respondText("Invalnusp request", status = HttpStatusCode.BadRequest)

            if (alunos.removeIf { it.nusp == nusp }) {
                call.respondText("Aluno removnuspo com sucesso.", status = HttpStatusCode.Accepted)
            }
            else call.respondText("Aluno não encontrado.", status = HttpStatusCode.NotFound)
        }
    }
}