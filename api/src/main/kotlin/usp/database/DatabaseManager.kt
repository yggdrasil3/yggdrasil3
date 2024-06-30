package usp.database

import org.ktorm.database.*
import org.ktorm.entity.*
import usp.models.*

class DatabaseManager {
    private val hostname = "localhost"
    private val port = 3306
    private val databaseName = "yggdrasil3"
    private val username = "local"
    private val password = "secret"

    private val ktormDatabase: Database

    init {
        val jdbcUrl = "jdbc:mysql://$hostname:$port/$databaseName?user=$username&password=$password&useSSL=false"
        ktormDatabase = Database.connect(jdbcUrl)
    }

    fun getAllMaterias(): List<DBMateriaEntity> {
        return ktormDatabase.sequenceOf(DBMateriaTable).toList()
    }

    fun addMateria(materia: Materia): Materia {
        val dbMateria = DBMateriaEntity {
            this.codigo = materia.codigo
            this.tipo = materia.tipo
            this.creditoAula = materia.creditoAula
            this.creditoTrabalho = materia.creditoTrabalho
            this.nome = materia.nome
        }

        ktormDatabase.sequenceOf(DBMateriaTable).add(dbMateria)

        return materia
    }

}
