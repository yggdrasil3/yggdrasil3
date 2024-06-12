package usp.repository

import usp.database.DatabaseManager
import usp.models.Materia

class MySQLMateriaRepository: MateriaRepository {
    private val database = DatabaseManager()

    override fun getAllMaterias(): List<Materia> {
        return database.getAllMaterias().map {Materia(it.codigo, it.tipo, it.creditoAula, it.creditoTrabalho, it.nome)}
    }

    override fun getMateriasById(id: String): Materia? {
        TODO("Not yet implemented")
    }

    override fun addMateria(materia: Materia): Materia {
        TODO("Not yet implemented")
    }

    override fun removeMateria(materia: Materia): Boolean {
        TODO("Not yet implemented")
    }
}