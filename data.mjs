let plantBasedMilk = [
    { name : "oatly", producer : "Sweden", type : "Oat milk", price : "$5" },
    { name : "silk Almond", producer : "US", type : "Oat milk", price : "$4" },
    { name : "Pacific Hemp", producer : "US", type : "Hemp milk", price : "$4" },
    { name : "Alpro", producer : "Belgium", type : [ "Oat milk", "Soya milk" ], price : "$4" },
    { name : "So Delicious", producer : "US", type : "Cashew milk", price : "$4" }
    ];

    const getAll = plantBasedMilk.map((plantMilk) => {
        return { name : plantMilk.name, producer : plantMilk.producer, type : plantMilk.type, price : plantMilk.price }
    });


    const getItem = (milkBrand) => {
        return plantBasedMilk.find((name) => {
            return name.name == milkBrand;
        });
    }

    export { getAll, getItem } ;
