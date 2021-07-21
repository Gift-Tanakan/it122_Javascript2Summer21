let plantBasedMilk = [
    { name : "Oatly", producer : "Sweden", type : "Oat milk", price : "$5" },
    { name : "Silk Almond", producer : "US", type : "Oat milk", price : "$4" },
    { name : "Pacific Hemp", producer : "US", type : "Hemp milk", price : "$4" },
    { name : "Alpro", producer : "Belgium", type : [ "Oat milk", "Soya milk" ], price : "$4" },
    { name : "So Delicious", producer : "US", type : "Cashew milk", price : "$4" }
    ];

    const getAll = () => {
        return plantBasedMilk;
    }
    console.log('this is txt from data file')

    const getItem = (milkBrand) => {
        return plantBasedMilk.find((name) => {
            return name.name.toLowerCase() == milkBrand.toLowerCase()
        });
    }

    export { getAll, getItem } ;
