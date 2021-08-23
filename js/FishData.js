/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const myName = "Brenda";
let myFavoriteColor = "Yellow";

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
		image: "bluefish.jpeg",
		species: "Trigger",
		length: 7,
		waterType: "Salt",
		harvestLocation: "Costa Rica"
    },
	{
        name: "Mr Freeze",
        food: "Meal Worms",
		image: "cat.jpeg",
		species: "Tang",
		length: 3,
		waterType: "Salt",
		harvestLocation: "Florida"
    },
	{
        name: "Nemo",
        food: "Goldfish",
        image: "crazy-fish.jpeg",
        species: "Clown",
        length: 3,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
	{
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpeg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
	{
        name: "Karen",
        food: "Algae",
        image: "Gold.jpeg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"
    },
	{
		name: "Robin Gilliams",
		food: "Bee Moths",
		image: "orangefish.jpeg",
		species: "Clownfish",
		length: 2,
		waterType: "Salt",
		harvestLocation: "Mexico"
	},
	{
        name: "Bruce",
        food: "not fish",
        image: "pinkfish.jpeg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
	{
        name: "Bloat",
        food: "shrimp",
        image: "purplefish.jpeg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
	{
        name: "Gordon",
        food: "Krill",
        image: "yellowbluefish.jpeg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"

    },
    {

        name: "Garfield",
        food: "Lasagna Pellets",
        image: "GarfieldFishin.png",
        species: "Catfish",
        length: 20,
        waterType: "Fresh",
        harvestLocation: "America"

    }
]

export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fishtaco of fishCollection) {
        if(fishtaco.length % 3 === 0){
           holyFishArray.push(fishtaco); 
        }
    }
    return holyFishArray
}

export const getSoldierFish = () => {
    //5,10,   20,
    const soldierFishArray = [];

    for (const fishObj of fishCollection){
        if (fishObj.length % 5 === 0){
            soldierFishArray.push(fishObj);
        }
    }

    return soldierFishArray;
}


