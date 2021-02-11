function printTxt(text) {
    let printWindow = window.open("", "printWindow");
    printWindow.document.open();
    printWindow.document.write(text);
    printWindow.document.close();
    printWindow.print();
}