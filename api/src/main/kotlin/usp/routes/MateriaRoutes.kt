package usp.routes

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import usp.models.materias
import usp.repository.MateriaRepository
import usp.repository.MySQLMateriaRepository

fun Route.materia() {
    route("/materia") {
        val repository: MateriaRepository = MySQLMateriaRepository()

        get {
            if (materias.isNotEmpty()) {
                call.respond(materias)
            }
        }
    }
}