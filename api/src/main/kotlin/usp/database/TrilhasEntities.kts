package  usp.database

import org.ktorm.schema.*
import org.ktorm.entity.Entity


object DBTrilhaTable: Table<DBTrilhaEntity>("aluno") {
    // mudar as variaveis como no começo
    val id = varchar("id").bindTo { it.id }
    val nome = varchar("nome").bindTo { it.nome }
    val concluida = bool("concluida").bindTo{ it.concluida}
}

interface DBTrilhaEntity: Entity<DBTrilhaEntity> {
    companion object : Entity.Factory<DBTrilhaEntity>()
    //mudar o modelo 
    val id: String
    val nome: String
    val concluida: Boolean
}