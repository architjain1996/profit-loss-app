function checkProftLoss()
{
    var buyingPrice = parseFloat(document.getElementById("priceId").value);
    var quantityBought = parseInt(document.getElementById("quantityId").value);
    var currentPrice = parseFloat(document.getElementById("currentPriceId").value);
    var  result = document.getElementById("resultId");
    if(buyingPrice > currentPrice)
    {
        var loss = (buyingPrice - currentPrice) * quantityBought;
        var lossPercent = (loss / buyingPrice) * 100;
        result.innerHTML = "You have made a loss of " + loss + " rupees / loss percent of " + lossPercent+" %";
    }
    else
    {
        var profit = (currentPrice-buyingPrice) * quantityBought;
        var profitPercent = (profit / buyingPrice) * 100;
        result.innerHTML = "You have made a profit of " + profit + " rupees / profit percent of " + profitPercent+" %";
    }
}