package  usp.database

import org.ktorm.schema.*
import org.ktorm.entity.Entity


object DBAlunoTable: Table<DBAlunoEntity>("aluno") {
    // mudar as variaveis como no começo
    val id = varchar("id").bindTo { it.id }
    val nusp = varchar("nusp").bindTo { it.nusp }
    val email = varchar("email").bindTo { it.email }
    val nome = varchar("nome").bindTo { it.nome }
}

interface DBAlunoEntity: Entity<DBAlunoEntity> {
    companion object : Entity.Factory<DBAlunoEntity>()
    //mudar o modelo 
    val id: String
    val nome: String
    val nusp: String
    val email: String
    // val materiasConcluidas : (não sei que tipo de variavel)
    // val trilhasConcluidas : (não sei que tipo de variavel)
}