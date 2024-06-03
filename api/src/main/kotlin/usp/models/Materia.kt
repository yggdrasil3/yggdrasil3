package usp.models

import kotlinx.serialization.Serializable

@Serializable
data class Materia (
    val codigo: String,
    val tipo: String,
    val creditoAula: Int,
    val creditoTrabalho: Int,
    val nome: String,
)

val materias = mutableListOf<Materia>()