class Formatter {
  stringTrimmer(string, length) {
    return string.substring(0, length) + "...";
  }

  currencyFormatter = (currency) => {
    const formattedCurrency = Intl.NumberFormat("en-US").format(currency);

    return formattedCurrency === "0" ? "No Data" : formattedCurrency + " $";
  };

  dateFormatter = (rawDate) => {
    const date = new Date(rawDate);

    return date.toLocaleDateString("hu-HU", { timeZone: "UTC" });
  };

  textExporter = (rawString) => {
    let formattedString = rawString.replaceAll(`</span>`, "");
    formattedString = formattedString.replaceAll(/["']/g, "");
    formattedString = formattedString.replaceAll("&quot;", "");

    return formattedString.replaceAll("<span class=searchmatch>", "");
  };
}

export default Formatter;
