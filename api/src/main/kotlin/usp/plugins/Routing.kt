package usp.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import usp.routes.alunoRoutes
import usp.routes.materiaRoute

fun Application. configureRouting() {
    routing {
        alunoRoutes()
        materiaRoute();
    }
}