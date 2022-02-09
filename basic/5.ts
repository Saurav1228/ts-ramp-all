const greet = (firstName :string, ...restofNames : string[]) => {
    console.log(`name is ${firstName}`)

    for (let name of restofNames ){
        console.log(`${name}`)
    }
}

greet('virat','kohli', 'anushka')