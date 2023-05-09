

export  const useTableState = () => {
    function createDataStriped(id,name, salary, country, city) {
        return {id, name, salary, country, city };
    }
    function crateStripedTitle(name,salary,country,city,id){
        return {id,name,salary,country,city}
    }

    const stripedRows = [
        createDataStriped(1,'Dakota Rice', 56142,"Niger",  'Oud-Turnhout'),
        createDataStriped(2,'Minerva Hooper', 23789, "Curaçao",'Sinaai-Waas'),
        createDataStriped(3,'Sage Rodriguez', 56142, "Netherlands", "Baileux"),
        createDataStriped(4,'Philip Chaney', 56142, "Korea, South", "Overland Park"),
        createDataStriped(5,'Mason Porter', 35614256, "Malawi", "Feldkirchen in Kärnten"),
    ];
    const stripedTitle = [
        crateStripedTitle('NAME',"SALARY","COUNTRY","CITY","ID")
    ]

    return [stripedRows,stripedTitle]

}

