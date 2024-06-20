package usp.models

import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class Trilha (
    val id: String,
    val nome: String,
    val concluida: Boolean,
);

val trilha = mutableListOf<Trilha>()