import axios from 'axios';
const cheerio = require('cheerio');

const publicSheetUrl = 'https://docs.google.com/spreadsheets/d/1FQvqeWqfvZFEzYE_kRgkguPtfdrDb3yAKIla4krdpBQ/edit?usp=sharing';

export const getData = async () => {
    let data = {};

    try {
        const response = await axios.get(publicSheetUrl);
        const html = response.data;

        const $ = cheerio.load(html);
        const rows = $('table.waffle tr').slice(2);

        rows.each((index, row) => {
            const columns = $(row).find('td');

            const code = columns.eq(0).text().trim();
            const name = columns.eq(1).text().trim();
            const type = columns.eq(2).text().trim();
            const classCredit = columns.eq(3).text().trim();
            const projectCredit = columns.eq(4).text().trim();
            const description = columns.eq(5).text().trim();

            data[code] = {
                name: name,
                type: type,
                classCredit: classCredit,
                projectCredit: projectCredit,
                description: description
            };
        })
        
        const jsonData = JSON.stringify(data, null, 2);
        console.log('Data from Google Sheets:', data['MAC0101'].name);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};