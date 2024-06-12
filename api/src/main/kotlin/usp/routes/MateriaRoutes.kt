package usp.routes

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.request.receive
import io.ktor.http.HttpStatusCode
import usp.models.materias
import usp.repository.MateriaRepository
import usp.repository.MySQLMateriaRepository
import usp.models.Materia

fun Route.materiaRoute() {
    route("/materia") {
        val repository: MateriaRepository = MySQLMateriaRepository()

        get {
            call.respond(repository.getAllMaterias())
        }

        get("{codigo}") {
            val codigo = call.parameters["codigo"]

            if (codigo == null) {
                call.respond(
                    HttpStatusCode.BadRequest,
                    "Código não fornecido"
                )
                return@get
            }

            val materia = repository.getMateriasById(codigo)

            if (materia == null) {
                call.respond(
                    HttpStatusCode.NotFound,
                    "Disciplina com código $codigo não encontrada"
                )
            } else {
                call.respond(materia)
            }
        }

        post {
            val materia = call.receive<Materia>()
            repository.addMateria(materia)
            call.respond(HttpStatusCode.Created, materia)
        }
    }
}