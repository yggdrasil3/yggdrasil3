abstract class Trilha(
    val nome: String,
    var concluida: Boolean
) {
    abstract fun marcarConclusao()
}

class SistemasDeSoftware(
    nome: String,
    concluida: Boolean,
    val desenvolvimentoDeSoftware: MutableList<Materia>,
    val sistemasParalelosDistribuidos: MutableList<Materia>,
    val bancoDeDados: MutableList<Materia>
) : Trilha(nome, concluida) {
    override fun marcarConclusao() {
    }
}

class InteligenciaArtificial(
    nome: String,
    concluida: Boolean,
    val inteligenciaArtificial: MutableList<Materia>,
    val introducaoIA: MutableList<Materia>,
    val sistemas: MutableList<Materia>,
    val teoriaAssociadaIA: MutableList<Materia>
) : Trilha(nome, concluida) {
    override fun marcarConclusao() {
    }
}

class CienciaDeDados(
    nome: String,
    concluida: Boolean,
    val nucleo1: MutableList<Materia>,
    val areaDeAplicacao: Materia,
    val nucleo2: MutableList<Materia>,
    val nucleo3: MutableList<Materia>,
    val nucleo4: MutableList<Materia>,
    val matematicaDiscretaII: MutableList<Materia>,
    val otimizacaoII: MutableList<Materia>
) : Trilha(nome, concluida) {
    override fun marcarConclusao() {
    }

    fun adicionaAreaDeAplicacao(materia: Materia) {
    }
}
