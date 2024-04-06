import requests
from bs4 import BeautifulSoup
import json
import os

MANDATORY_TABLE = 0
ELECTIVE_STATISTICS_TABLE = 9
ELECTIVE_SCIENCE_TABLE = 11
ELECTIVE_HUMANITY_TABLE = 10
ELECTIVE_TABLE = 12

TOTAL_SEMESTERS = 8

def get_subject_info(subject_code):
    """
    Giving the function a valid subject_code, it returns a dictionary with the subject's name, class credits, project credits and description. The information is obtained from Jupiter Web, USP service that provides the details of each subject the University offers.

    Parameters:
    - subject_code: (string) a valid code, generally, contains 3 letters and 4 numbers. In order to be precise, it is reccomended to look for the subject in Jupiter's web site.
    
    Returns:
    (dictionary) subject's information in the form:
        {
            'code': ...,
            'name': ...,
            'class_credits': ...,
            'project_credits: ...,
            'description': ...
        }
    """
    url = f"https://uspdigital.usp.br/jupiterweb/obterDisciplina?nomdis=&sgldis={subject_code}"

    response = requests.get(url, {'Accept-Charset': 'UTF-8'})

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')

        subject_name = soup.select('#layout_conteudo b')[2].text.strip()[22:]
        subject_description = soup.select('#layout_conteudo pre:nth-child(1)')[2].text.strip()
        subject_class_credits = soup.select('div#layout_principal div#layout_conteudo span.txt_arial_8pt_gray')[0].text.strip()
        subject_project_credits = soup.select('div#layout_principal div#layout_conteudo span.txt_arial_8pt_gray')[1].text.strip()

        subject_info = ({
            'code': subject_code,
            'name': subject_name,
            'class_credits': subject_class_credits,
            'project_credits': subject_project_credits,
            'description': subject_description
        })

        return subject_info

def get_mandatory_subjects():
    """
    It returns a dictonary with the mandatory subjects by semester with the information in it.

    Returns:
    (list) mandatory subject by semesters in the form
        [
            [
                {...},
                {...},
                ...
            ],
            [
                {...},
                {...},
                ...
            ],
            ...
        ]
    Each index represents the semesters from 0 to 7
    """
    url = f"https://bcc.ime.usp.br/grade-atual/"

    response = requests.get(url)

    mandatory_subject = []

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')
        
        for semester in range(TOTAL_SEMESTERS):
            table = soup.select('table tbody')[MANDATORY_TABLE + semester]

            mandotory_subject_codes = [row.text.strip() for row in table.select('td')[::3] if row.text.strip() != '.\xa0.\xa0.']

            mandatory_subject_info = [ get_subject_info(x) for x in mandotory_subject_codes ]

            mandatory_subject.append(mandatory_subject_info)

        return mandatory_subject

def get_elective_statistics_subjects():
    """
    It returns a dictonary with the elective statistics subjects.

    Returns:
    (dictionary) elective statistics subject in the form
        [
            {...},
            {...},
            ...
        ]
    """
    url = f"https://bcc.ime.usp.br/grade-atual/"

    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')
        
        table = soup.select('table tbody')[ELECTIVE_STATISTICS_TABLE]

        subject_codes = [row.text.strip() for row in table.select('td')[::3] if row.text.strip() != '.\xa0.\xa0.']

        elective_subject_info = [ get_subject_info(x) for x in subject_codes ]

        return elective_subject_info

def get_elective_science_subjects():
    """
    It returns a dictonary with the elective statistics subjects.

    Returns:
    (dictionary) elective statistics subject in the form
        [
            {...},
            {...},
            ...
        ]
    """
    url = f"https://bcc.ime.usp.br/grade-atual/"

    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')
        
        table = soup.select('table tbody')[ELECTIVE_SCIENCE_TABLE]

        subject_codes = [row.text.strip() for row in table.select('td')[::3] if row.text.strip() != '.\xa0.\xa0.']

        elective_subject_info = [ get_subject_info(x) for x in subject_codes ]

        return elective_subject_info

def get_elective_humanity_subjects():
    """
    It returns a dictonary with the elective statistics subjects.

    Returns:
    (dictionary) elective statistics subject in the form
        [
            {...},
            {...},
            ...
        ]
    """
    url = f"https://bcc.ime.usp.br/grade-atual/"

    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')
        
        table = soup.select('table tbody')[ELECTIVE_HUMANITY_TABLE]

        subject_codes = [row.text.strip() for row in table.select('td')[::3] if row.text.strip() != '.\xa0.\xa0.']

        elective_subject_info = [ get_subject_info(x) for x in subject_codes ]

        return elective_subject_info
    
def get_elective_subjects():
    """
    It returns a dictonary with the elective statistics subjects.

    Returns:
    (dictionary) elective statistics subject in the form
        [
            {...},
            {...},
            ...
        ]
    """
    url = f"https://bcc.ime.usp.br/grade-atual/"

    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'lxml')
        
        table = soup.select('table tbody')[ELECTIVE_TABLE]

        subject_codes = [row.text.strip() for row in table.select('td')[::3] if row.text.strip() != '.\xa0.\xa0.']

        elective_subject_info = [ get_subject_info(x) for x in subject_codes ]

        return elective_subject_info

def get_all_subjects_and_save_to_json():
    current_directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_directory, "../src/util/subjects.json")

    mandatory_subjects = get_mandatory_subjects()
    elective_statistics_subjects = get_elective_statistics_subjects()
    elective_science_subjects = get_elective_science_subjects()
    elective_humanity_subjects = get_elective_humanity_subjects()
    elective_subjects = get_elective_subjects()

    all_subjects = {
        'mandatory': mandatory_subjects,
        'elective_statistics': elective_statistics_subjects,
        'elective_science': elective_science_subjects,
        'elective_humanity': elective_humanity_subjects,
        'elective': elective_subjects
    }

    with open(file_path, 'w', encoding='UTF-8') as json_file:
        json.dump(all_subjects, json_file, indent=4, ensure_ascii=False)

    return all_subjects

print(get_all_subjects_and_save_to_json())