

export const nifty50 = () => {
    const sheetID = "1IAyrJQuuqQk40emOq1NCvHR4440_B1Vkmh8oQvHK80c";
    const niftyfmcgSheetTitle = "nifty50";
    const niftyfmcgSheetRange = "C3:C31";
    const niftyfmcgSheetURL = "https://docs.google.com/spreadsheets/d/" + sheetID + "/gviz/tq?sheet=" + niftyfmcgSheetTitle + "&range=" + niftyfmcgSheetRange;

    return fetch(niftyfmcgSheetURL)
        .then((res) => res.text())
        .then((rep) => {
            const data = JSON.parse(rep.substr(47).slice(0, -2));
            const stockdata = [];
            let i = 0;
            while (data.table.rows[i]) {
                stockdata.push([data.table.rows[i].c[0].v]);
                i++;
            }
            return stockdata;
        });
};

export const banknifty = () => {
    const sheetID = "1IAyrJQuuqQk40emOq1NCvHR4440_B1Vkmh8oQvHK80c";
    const niftyfmcgSheetTitle = "banknifty";
    const niftyfmcgSheetRange = "C3:C31";
    const niftyfmcgSheetURL = "https://docs.google.com/spreadsheets/d/" + sheetID + "/gviz/tq?sheet=" + niftyfmcgSheetTitle + "&range=" + niftyfmcgSheetRange;

    return fetch(niftyfmcgSheetURL)
        .then((res) => res.text())
        .then((rep) => {
            const data = JSON.parse(rep.substr(47).slice(0, -2));
            const stockdata = [];
            let i = 0;
            while (data.table.rows[i]) {
                stockdata.push([data.table.rows[i].c[0].v]);
                i++;
            }
            return stockdata;
        });
};