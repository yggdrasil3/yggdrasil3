package usp.repository

import usp.models.Materia

interface MateriaRepository {
    fun getAllMaterias(): List<Materia>

    fun getMateriasById(id: String): Materia?

    fun addMateria(materia: Materia): Materia

    fun removeMateria(materia: Materia): Boolean
}