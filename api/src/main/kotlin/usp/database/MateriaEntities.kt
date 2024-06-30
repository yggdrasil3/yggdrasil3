package  usp.database

import org.ktorm.schema.*
import org.ktorm.entity.Entity
import usp.database.DBMateriaTable.bindTo

object DBMateriaTable: Table<DBMateriaEntity>("materia") {
    var codigo = varchar("codigo").primaryKey().bindTo { it.codigo }
    var tipo = varchar("tipo").bindTo { it.tipo }
    var creditoAula = int("creditoAula").bindTo { it.creditoAula }
    var creditoTrabalho = int("creditoTrabalho").bindTo { it.creditoTrabalho }
    var nome = varchar("nome").bindTo { it.nome }
}

interface DBMateriaEntity: Entity<DBMateriaEntity> {
    companion object : Entity.Factory<DBMateriaEntity>()

    var codigo: String
    var tipo: String
    var creditoAula: Int
    var creditoTrabalho: Int
    var nome: String
}