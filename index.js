function checkProftLoss()
{
debugger;
    var buyingPrice = parseFloat(document.getElementById("priceId").value);
    var quantityBought = parseInt(document.getElementById("quantityId").value);
    var currentPrice = parseFloat(document.getElementById("currentPriceId").value);
    if(isNaN(buyingPrice) || isNaN(quantityBought) || isNaN(currentPrice))
    {
        alert("Please enter all the values to proceed");
        return false;
    }
    var  result = document.getElementById("resultId");
    if(buyingPrice > currentPrice)
    {
        var loss = (buyingPrice - currentPrice) * quantityBought;
        var lossPercent = ((buyingPrice - currentPrice) / buyingPrice) * 100;
        result.innerHTML = "You have made a loss of " + loss + " rupees / loss percent of " + lossPercent.toFixed(2)+" %";
    }
    else
    {
        var profit = (currentPrice-buyingPrice) * quantityBought;
        var profitPercent = ((currentPrice-buyingPrice) / buyingPrice) * 100;
        result.innerHTML = "You have made a profit of " + profit + " rupees / profit percent of " + profitPercent.toFixed(2)+" %";
    }
}