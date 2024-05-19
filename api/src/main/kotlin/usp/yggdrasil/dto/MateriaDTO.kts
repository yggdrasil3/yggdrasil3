package kotlin.usp.yggdrasil.dto

data class MateriaDTO (
    val creditoAula: Int,
    val creditoTrabalho: Int,
    val nome: String,
    val codigo: String,
    val tipo: Tipo,
    val requisitos: MutableList<Materia>
)