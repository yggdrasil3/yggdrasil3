package usp.models

import kotlinx.serialization.Serializable

@Serializable
data class Materia (
    var codigo: String,
    var tipo: String,
    var creditoAula: Int,
    var creditoTrabalho: Int,
    var nome: String,
)

val materias = mutableListOf<Materia>()