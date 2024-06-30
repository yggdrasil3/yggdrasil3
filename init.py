import http.client
import json

host = "localhost"
port = 8080
endpoint = "/materia"

materias_json = {
    "mandatory": [
        {
            "code": "MAC0101",
            "name": "Integração na Universidade e na Profissão",
            "class_credits": "2",
            "project_credits": "0",
            "description": "Durante o semestre os ingressantes assistirão palestras de alunos veteranos..."
        },
        {
            "code": "MAC0105",
            "name": "Fundamentos de Matemática para a Computação",
            "class_credits": "4",
            "project_credits": "0",
            "description": "Discurso matemático: leitura e escrita matemática..."
        }
    ]
}

def adicionar_materias(materias):
    conn = http.client.HTTPConnection(host, port)
    
    for tipo, lista_materias in materias.items():
        for materia in lista_materias:
            data = {
                "codigo": materia["code"],
                "tipo": tipo,
                "creditoAula": int(materia["class_credits"]),
                "creditoTrabalho": int(materia["project_credits"]),
                "nome": materia["name"],
                "descricao": materia["description"]
            }
            headers = {"Content-Type": "application/json"}
            conn.request("POST", endpoint, json.dumps(data), headers)
            response = conn.getresponse()

            if response.status == 201:
                print(f"Matéria {data['nome']} adicionada com sucesso.")
            else:
                print(f"Falha ao adicionar matéria {data['nome']}: {response.status}")

    conn.close()

adicionar_materias(materias_json)
