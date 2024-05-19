package kotlin.usp.yggdrasil.entity

@Entity
data class Aluno(
    val nome: String,
    val nusp: String,
    val emailUSP: String,
    val materiasConcluidas: MutableList<Materia>,
    val trilhasConcluidas: MutableList<Trilha>
) {
    private @Id @GeneratedValue Int id;
    fun incluirMateria(nome: String, codigo: String, creditoAula: Int, creditoTrabalho: Int) {
    }

    fun marcarMateriaConcluida(materia: Materia) {
    }

    fun desmarcarMateriaConcluida(materia: Materia) {
    }

    fun concluirTrilha(trilha: Trilha) {
    }
}
