enum class Tipo {
    OBRIGATORIA,
    ELETIVA,
    LIVRE
}

class Materia(
    val creditoAula: Int,
    val creditoTrabalho: Int,
    val nome: String,
    val codigo: String,
    val tipo: Tipo,
    val requisitos: MutableList<Materia>
)
