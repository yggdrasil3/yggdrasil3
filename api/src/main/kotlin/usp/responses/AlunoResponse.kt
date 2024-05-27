package usp.responses

import kotlinx.serialization.Serializable

@Serializable
class AlunoResponse(
    val id: String,
    val nome: String,
    val nusp: String,
    val emailUSP: String,
)