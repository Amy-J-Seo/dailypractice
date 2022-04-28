const axios = require("axios");
const cheerio = require("cheerio");
const XLSX = require("xlsx");
const saveAs = require("file-saver");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM(`...`).window;

// axios를 활용해 AJAX로 HTML 문서를 가져오는 함수 구현
async function getHTML() {
  try {
    return await axios.get(
      "https://www.nhis.or.kr/nhis/policy/retrieveAssistingDevicesProductList.do"
    );
  } catch (error) {
    console.error(error);
  }
}

let tableData = getHTML()
  .then((html) => {
    let titleList = [];
    const $ = cheerio.load(html.data);
    const bodyList = $("table");
    console.log(111);
    // return `<table>${bodyList.html()}</table>`;
    return bodyList.html();
  })
  .then((tableData) => {
    let dom = document.createElement("table");
    dom.setAttribute("id", "tableData");
    dom.innerHTML = tableData;
    exportExcel(document.getElementById("tableData"));
  });
// .then((res) => console.log(res)); // 저장된 결과를 출력

function exportExcel(data) {
  // step 1. workbook 생성
  var wb = XLSX.utils.book_new();

  // step 2. 시트 만들기
  var newWorksheet = excelHandler.getWorksheet(data);

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
  XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

  // step 4. 엑셀 파일 만들기
  var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // step 5. 엑셀 파일 내보내기
  saveAs(
    new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
    excelHandler.getExcelFileName()
  );
}

var excelHandler = {
  getExcelFileName: function () {
    return "table-test.xlsx"; //파일명
  },
  getSheetName: function () {
    return "Table Test Sheet"; //시트명
  },
  getWorksheet: function (data) {
    return XLSX.utils.table_to_sheet(data);
  },
};

function s2ab(s) {
  var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  var view = new Uint8Array(buf); //create uint8array as viewer
  for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
  return buf;
}
