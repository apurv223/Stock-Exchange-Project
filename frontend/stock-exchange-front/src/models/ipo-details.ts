export class IpoDetails {
  companyName: string;
  stockExchange: string;
  pricePerShare: string;
  totalNumberOfShares: string;
  openDateTime: string;
  remarks: string;
  constructor(companyName,stockExchange,pricePerShare,totalNumberOfShares,openDateTime,remarks){
      this.companyName = companyName;
      this.stockExchange = stockExchange;
      this.pricePerShare = pricePerShare;
      this.totalNumberOfShares = totalNumberOfShares;
      this.openDateTime = openDateTime;
      this.remarks = remarks;
    }
}
