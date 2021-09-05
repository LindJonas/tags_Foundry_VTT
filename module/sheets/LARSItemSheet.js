export default class MyItemSheet extends ItemSheet {
  get template() {
    return `systems/lars/templates/sheets/${this.item.data.type}-sheet.html`;
  }

  getData() {
    const baseData = super.getData();
    let sheetData = {
      owner: this.item.isOwner,
      editable: this.isEditable,
      item: baseData.item,
      data: baseData.item.data.data,
      config: CONFIG.lars
    }

    return sheetData;
  }
}
