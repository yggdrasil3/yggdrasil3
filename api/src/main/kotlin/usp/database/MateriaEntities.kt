package  usp.database

import org.ktorm.schema.*
import org.ktorm.entity.Entity
import usp.database.DBMateriaTable.bindTo

object DBMateriaTable: Table<>("materia") {
    val codigo = varchar("codigo").primaryKey().bindTo { it.codigo }
    val tipo = varchar("tipo").bindTo { it.tipo }
    val creditoAula = int("creditoAula").bindTo { it.creditoAula }
    val creditoTrabalho = int("creditoTrabalho").bindTo { it.creditoTrabalho }
    val nome = varchar("nome").bindTo { it.nome }
}

interface DBMateriaEntity: Entity<DBMateriaEntity> {
    companion object : Entity.Factory<DBMateriaEntity>()

    val codigo: Int
    val tipo: String
    val creditoAula: Int
    val creditoTrabalho: Int
    val nome: String
}