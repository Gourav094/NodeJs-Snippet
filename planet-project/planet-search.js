const {parse} = require('csv-parse')

const fs = require('fs')

const habitablePlanet = []

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11;
}

fs.createReadStream('kepler-data.csv')
    .pipe(parse({
        comment:'#',
        columns:true
    }))
    .on('data', (res) => {
        if(isHabitablePlanet(res)){
            // console.log("controlled")
            habitablePlanet.push(res)
        }
    })
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log(habitablePlanet.map((planet) => {
            return planet['kepler_name']
        }))
        console.log("Data successfully captured")
    })