package kotlin.usp.yggdrasil.entity

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

enum class Tipo {
    OBRIGATORIA,
    ELETIVA,
    LIVRE
}

class Materia(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val codigo: String,
    val nome: String,
    val tipo: Tipo,
    val creditoAula: Int,
    val creditoTrabalho: Int,
    val requisitos: MutableList<Materia>
)
