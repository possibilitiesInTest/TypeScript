const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pop: [string, boolean, number] = ['brown', true, 40]
// type declaration creates tuple
// safeguards order of types
pop[0] = 40;


type Drink = [string, boolean, number]
const tea: Drink = ['gold', false, 0]


// tuple vs. object for modeling records
const carSpecs: [number, number] = [400, 3354]

const carStats = {
    horseposer: 400,
    weight: 3354
}