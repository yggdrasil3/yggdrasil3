package usp.models

import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class Aluno (
    val senha: String,
    val nusp: String,
);

val alunos = mutableListOf<Aluno>()