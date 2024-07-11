import * as excelJS from 'exceljs';
import { saveAs } from 'file-saver';

type ExcelData = {
  HEADER: any;
  BODY: any;
};

export const convertToExcel = ({ HEADER, BODY }: ExcelData) => {
  const workbook = new excelJS.Workbook();

  workbook.creator = 'Аттестат';
  workbook.lastModifiedBy = 'СПУЗ';
  workbook.created = new Date();
  workbook.modified = new Date();

  const sheet = workbook.addWorksheet('Аттестат');
  const header = sheet.getRow(1);

  sheet.getRow(1).font = { bold: true };
  sheet.getRow(1).height = 20;

  header.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'EDF2F7' },
  };

  header.eachCell((_cell, rowNumber) => {
    sheet.getColumn(1).alignment = {
      vertical: 'middle',
      horizontal: 'left',
    };

    sheet.getColumn(2).alignment = {
      vertical: 'middle',
      horizontal: 'left',
    };

    sheet.getColumn(3).alignment = {
      vertical: 'middle',
      horizontal: 'left',
    };

    sheet.getColumn(rowNumber).alignment = {
      vertical: 'middle',
      horizontal: 'center',
    };
  });

  sheet.columns = HEADER?.map((x: { value: string; width: number }) => {
    return { width: x.width };
  });

  sheet.addRows(BODY);

  sheet.getCell('A1').value = 'ФИО';
  sheet.getCell('B1').value = 'ПИН';
  sheet.getCell('C1').value = 'Дата рождения';
  sheet.getCell('D1').value = 'Телефон';
  sheet.getCell('E1').value = 'Средний балл';
  sheet.getCell('F1').value = 'Проф.балл';
  sheet.getCell('G1').value = 'Внутр.испытание';
  sheet.getCell('H1').value = 'Общая сумма';
  sheet.getCell('I1').value = 'Дата регистрации';

  workbook.xlsx.writeBuffer().then((buffer) => {
    // done
    // console.log(buffer);
    const blob = new Blob([buffer], { type: 'protocol/xlsx' });

    saveAs(blob, `Аттестат.xlsx`);
  });
};
