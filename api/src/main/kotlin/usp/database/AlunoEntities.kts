package  usp.database

import org.ktorm.schema.*
import org.ktorm.entity.Entity


object DBAlunoTable: Table<DBAlunoEntity>("aluno") {
    val nusp = varchar("nusp").bindTo { it.nusp }
    val senha = varchar("senha").bindTo { it.senha }
}

interface DBAlunoEntity: Entity<DBAlunoEntity> {
    companion object : Entity.Factory<DBAlunoEntity>()
    val nusp: String
    val senha: String
}